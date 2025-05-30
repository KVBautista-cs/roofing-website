import { NextResponse } from 'next/server';
import { resend } from '@/lib/resend';

export async function POST(req: Request) {
  const body = await req.json();
  const { email } = body;

  if (!email || typeof email !== 'string' || !email.includes('@')) {
    return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
  }

  try {
    const data = await resend.emails.send({
      from: 'Roofing Website <onboarding@resend.dev>',
      to: 'mountainclimbersroofers@gmail.com', // or client email
      subject: 'New Subscriber',
      html: `<p>New subscriber: <strong>${email}</strong></p>`,
    });

    console.log('📩 Subscribed via modal:', data);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('❌ Subscription error:', error);
    return NextResponse.json({ error: 'Failed to subscribe' }, { status: 500 });
  }
}
