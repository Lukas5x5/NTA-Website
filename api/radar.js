export const config = {
  runtime: 'edge',
}

export default async function handler(request) {
  const url = new URL(request.url)
  const lat = url.searchParams.get('lat')
  const lon = url.searchParams.get('lon')
  const radius = url.searchParams.get('radius') || '30'

  if (!lat || !lon || isNaN(lat) || isNaN(lon) || isNaN(radius)) {
    return new Response(JSON.stringify({ error: 'Invalid parameters. Use ?lat=47.8&lon=13.0&radius=30' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
    })
  }

  // Koordinaten auf 2 Dezimalstellen runden für besseres Caching
  // ~1km Genauigkeit — reicht für Radar (Flugzeuge sind km entfernt)
  const roundedLat = parseFloat(lat).toFixed(2)
  const roundedLon = parseFloat(lon).toFixed(2)
  const clampedRadius = Math.min(Math.max(parseFloat(radius), 10), 250)

  const apiUrl = `https://api.airplanes.live/v2/point/${roundedLat}/${roundedLon}/${clampedRadius}`

  try {
    const resp = await fetch(apiUrl, {
      headers: {
        'User-Agent': 'NTA-SkyNav/1.0 (https://ntaskynav.app; balloon flight navigation app)',
        'Accept': 'application/json',
      },
    })

    if (!resp.ok) {
      return new Response(JSON.stringify({ error: `Upstream error: ${resp.status}` }), {
        status: resp.status,
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
      })
    }

    const data = await resp.text()

    return new Response(data, {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        // Browser: 10s Cache, CDN: 10s Cache — alle Nutzer im selben Gebiet teilen sich den Cache
        'Cache-Control': 'public, max-age=10, s-maxage=10, stale-while-revalidate=30',
        'Access-Control-Allow-Origin': '*',
        'CDN-Cache-Control': 'public, max-age=10',
        'Vercel-CDN-Cache-Control': 'public, max-age=10',
      },
    })
  } catch (err) {
    return new Response(JSON.stringify({ error: 'Radar fetch failed' }), {
      status: 502,
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
    })
  }
}
