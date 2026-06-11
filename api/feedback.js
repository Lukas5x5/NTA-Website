export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Body robust parsen (Objekt, String oder Raw-Stream)
    let body = req.body;
    if (typeof body === 'string') {
      try { body = JSON.parse(body); } catch (e) { body = {}; }
    }
    if (!body || typeof body !== 'object') {
      let raw = '';
      try {
        for await (const chunk of req) raw += chunk;
        body = JSON.parse(raw);
      } catch (e) {
        body = {};
      }
    }

    const name = body.name || '';
    const email = body.email || '';
    const message = body.message || '';

    if (!message.trim()) {
      return res.status(400).json({ error: 'Message is required' });
    }

    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY fehlt');
      return res.status(500).json({ error: 'Mail service not configured', detail: 'missing_api_key' });
    }

    const text = [
      name ? `Name: ${name}` : null,
      email ? `Email: ${email}` : null,
      '',
      'Feedback:',
      message,
    ].filter(Boolean).join('\n');

    const send = (to) => fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'NTA SkyNav Feedback <feedback@ntaskynav.app>',
        to,
        reply_to: email && email.includes('@') ? email : undefined,
        subject: `SkyNav Feedback${name ? ` — ${name}` : ''}`,
        text,
      }),
    });

    // Primär an die offizielle Adresse; falls Resend sie ablehnt
    // (Domain noch nicht verifiziert), Fallback an die Account-Adresse.
    let response = await send('info@ntaskynav.app');
    let detail = '';
    if (!response.ok) {
      detail = `info@: ${response.status} ${(await response.text()).slice(0, 200)}`;
      console.error('Resend error (info@ntaskynav.app):', detail);
      response = await send('lraustria@hotmail.com');
    }

    if (!response.ok) {
      detail += ` | fallback: ${response.status} ${(await response.text()).slice(0, 200)}`;
      console.error('Resend error (fallback):', detail);
      return res.status(500).json({ error: 'Failed to send email', detail });
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Feedback error:', error);
    return res.status(500).json({ error: 'Internal server error', detail: String(error && error.message || error).slice(0, 200) });
  }
}
