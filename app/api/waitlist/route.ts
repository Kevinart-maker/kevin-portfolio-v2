import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { Resend } from 'resend';
import dns from 'dns/promises';

async function isDomainValid(email: string) {
  const domain = email.split('@')[1];
  try {
    const records = await dns.resolveMx(domain);
    return records && records.length > 0;
  } catch (err) {
    return false;
  }
}

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { email, name } = await req.json();

  if (!email || !name) {
    return NextResponse.json({ error: 'Name and email is required' }, { status: 400 });
  }

  // 🛡️ Check if domain has valid MX records
  const domainValid = await isDomainValid(email);
  if (!domainValid) {
    return NextResponse.json({ error: 'Invalid or unreachable email domain' }, { status: 400 });
  }

  // Insert into Supabase
  const { error } = await supabase.from('template').insert([{ email, name }]);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  // Send Confirmation Email
  try {
    await resend.emails.send({
      from: 'Free Landing Page Template <noreply@clabedautos.com>',
      to: email,
      subject: 'You’re on the waitlist!',
      html: `<p>Hi ${name},</p><p> Thanks for joining the waitlist! You will get the free template soon.</p>`,
    });
  } catch (err) {
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }

  return NextResponse.json({ message: 'Success! You are on the waitlist.' }, { status: 200 });
}