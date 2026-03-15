export const config = {
  runtime: 'edge',
}

export default async function handler(request) {
  const url = new URL(request.url)
  const parts = url.pathname.replace('/api/tiles/', '').replace('.png', '').split('/')
  const [z, x, y] = parts

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
        'User-Agent': 'NTA-SkyNav/1.0 (https://ntaskynav.com; balloon flight navigation app)',
        'Referer': 'https://ntaskynav.com/',
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
