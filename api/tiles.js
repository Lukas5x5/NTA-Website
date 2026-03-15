export const config = {
  runtime: 'edge',
}

export default async function handler(request) {
  const url = new URL(request.url)
  // URL format: /api/tiles?z=10&x=548&y=358
  const z = url.searchParams.get('z')
  const x = url.searchParams.get('x')
  const y = url.searchParams.get('y')

  // Validate params
  if (!z || !x || !y || isNaN(z) || isNaN(x) || isNaN(y)) {
    return new Response('Invalid tile coordinates', { status: 400 })
  }

  // Pick random subdomain for load balancing
  const sub = ['a', 'b', 'c'][Math.floor(Math.random() * 3)]
  const tileUrl = `https://${sub}.tile.openstreetmap.org/${z}/${x}/${y}.png`

  try {
    const tileRes = await fetch(tileUrl, {
      headers: {
        'User-Agent': 'NTA-SkyNav/1.0 (https://ntaskynav.app; balloon flight navigation app)',
        'Referer': 'https://ntaskynav.app/',
        'Accept': 'image/png,image/*',
      },
    })

    if (!tileRes.ok) {
      return new Response('Tile not found', { status: tileRes.status })
    }

    const tileData = await tileRes.arrayBuffer()

    return new Response(tileData, {
      status: 200,
      headers: {
        'Content-Type': 'image/png',
        'Cache-Control': 'public, max-age=86400, s-maxage=604800, stale-while-revalidate=86400',
        'Access-Control-Allow-Origin': '*',
        'CDN-Cache-Control': 'public, max-age=604800',
        'Vercel-CDN-Cache-Control': 'public, max-age=604800',
      },
    })
  } catch (err) {
    return new Response('Tile fetch failed', { status: 502 })
  }
}
