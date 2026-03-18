export const config = {
  runtime: 'edge',
}

export default async function handler(request) {
  const url = new URL(request.url)
  const z = url.searchParams.get('z')
  const x = url.searchParams.get('x')
  const y = url.searchParams.get('y')

  if (!z || !x || !y || isNaN(z) || isNaN(x) || isNaN(y)) {
    return new Response('Invalid tile coordinates', { status: 400 })
  }

  // Alle 3 Subdomains durchprobieren bei Rate-Limit
  const subs = ['a', 'b', 'c']
  const startIdx = (parseInt(x) + parseInt(y)) % 3 // Deterministisch für CDN-Cache-Konsistenz

  for (let attempt = 0; attempt < 3; attempt++) {
    const sub = subs[(startIdx + attempt) % 3]
    const tileUrl = `https://${sub}.tile.openstreetmap.org/${z}/${x}/${y}.png`

    try {
      const tileRes = await fetch(tileUrl, {
        headers: {
          'User-Agent': 'NTA-SkyNav/1.0 (https://ntaskynav.app; balloon flight navigation app)',
          'Referer': 'https://ntaskynav.app/',
          'Accept': 'image/png,image/*',
        },
      })

      // Rate-Limited → nächste Subdomain versuchen
      if (tileRes.status === 429) {
        if (attempt < 2) continue
        return new Response('Rate limited', { status: 429 })
      }

      if (!tileRes.ok) {
        return new Response('Tile not found', { status: tileRes.status })
      }

      const tileData = await tileRes.arrayBuffer()

      return new Response(tileData, {
        status: 200,
        headers: {
          'Content-Type': 'image/png',
          // Browser: 1 Tag, CDN: 30 Tage (Tiles ändern sich selten)
          'Cache-Control': 'public, max-age=86400, s-maxage=2592000, stale-while-revalidate=604800',
          'Access-Control-Allow-Origin': '*',
          'CDN-Cache-Control': 'public, max-age=2592000',
          'Vercel-CDN-Cache-Control': 'public, max-age=2592000',
        },
      })
    } catch (err) {
      if (attempt < 2) continue
      return new Response('Tile fetch failed', { status: 502 })
    }
  }

  return new Response('Tile fetch failed', { status: 502 })
}
