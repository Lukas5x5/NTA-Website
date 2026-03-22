export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, message } = req.body;

  if (!message || !message.trim()) {
    return res.status(400).json({ error: 'Message is required' });
  }

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'NTA SkyNav Feedback <onboarding@resend.dev>',
        to: 'info@ntaskynav.app',
        subject: `Weather Briefing Feedback${name ? ` — ${name}` : ''}`,
        text: [
          name ? `Name: ${name}` : null,
          email ? `Email: ${email}` : null,
          '',
          'Feedback:',
          message,
        ].filter(Boolean).join('\n'),
      }),
    });

    if (!response.ok) {
      const err = await response.text();
      console.error('Resend error:', err);
      return res.status(500).json({ error: 'Failed to send email' });
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Feedback error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
