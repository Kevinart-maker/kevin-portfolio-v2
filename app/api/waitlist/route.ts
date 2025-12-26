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
      from: 'Let’s build your highest converting page yet! <noreply@kevinodeyemi.com>',
      to: email,
      subject: 'Let’s build your page!',
      html: `<div style="font-family: 'Inter', sans-serif;"> <img src="https://res.cloudinary.com/duf3ztnhv/image/upload/v1766753789/kevin_wfxcxk.png" alt="Logo" style="width: 100%; height: 100%; border-radius: 2rem;"/> <p>Hi ${name},</p><p> Thanks for applying! Please book a call with me to discuss your project.</p> <a href="https://cal.com/odeyemikevin/let-s-build-your-highest-converting-page-yet" style="background-color: #000; color: #fff; padding: 10px 20px; margin-top: 1rem; border-radius: 2rem; text-decoration: none;">Book a call</a></div>`,
    });
  } catch (err) {
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }

  return NextResponse.json({ message: 'Applied! Check your email/spam for next steps.' }, { status: 200 });
}