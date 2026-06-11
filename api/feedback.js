export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, message } = req.body;

  if (!message || !message.trim()) {
    return res.status(400).json({ error: 'Message is required' });
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
      from: 'NTA SkyNav Feedback <onboarding@resend.dev>',
      to,
      reply_to: email && email.includes('@') ? email : undefined,
      subject: `SkyNav Feedback${name ? ` — ${name}` : ''}`,
      text,
    }),
  });

  try {
    // Primär an die offizielle Adresse; falls Resend sie ablehnt
    // (Domain noch nicht verifiziert), Fallback an die Account-Adresse.
    let response = await send('info@ntaskynav.app');
    if (!response.ok) {
      const err = await response.text();
      console.error('Resend error (info@ntaskynav.app):', err);
      response = await send('lraustria@hotmail.com');
    }

    if (!response.ok) {
      const err = await response.text();
      console.error('Resend error (fallback):', err);
      return res.status(500).json({ error: 'Failed to send email' });
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Feedback error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
