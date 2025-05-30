// src/app/api/contact/route.ts

import { NextResponse } from 'next/server';
import { resend } from '@/lib/resend'; 

export async function POST(req: Request) {
  const body = await req.json();
  const { name, email, phone, message } = body;

  if (
    typeof name !== 'string' || name.trim() === '' ||
    typeof email !== 'string' || email.trim() === '' ||
    typeof phone !== 'string' || phone.trim() === '' ||
    typeof message !== 'string' || message.trim() === ''
  ) {
    return NextResponse.json({ error: 'Missing or invalid fields' }, { status: 400 });
  }

  try {
    const data = await resend.emails.send({
      from: 'Roofing Website <onboarding@resend.dev>', //  Safe to use
      to: 'mountainclimbersroofers@gmail.com', // ⬅ Replace with YOUR real email
      subject: '📬 New Contact Form Submission',
      html: `
        <h2>New message from ${name}</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    });

    console.log('📩 Resend response:', data);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('❌ Email sending error:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}





