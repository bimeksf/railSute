'use server';

import { supabase } from './supabase';
import sanitizeHtml from 'sanitize-html';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY!);

type FormStateType = {
  message?: string | null;
  success?: boolean;
};

export async function addPost(state: FormStateType,formData: FormData): Promise<FormStateType> {
  const title = sanitizeHtml((formData.get('title') || '') as string);
  const name = sanitizeHtml((formData.get('name') || '') as string);
  const email = sanitizeHtml((formData.get('email') || '') as string);
  const description = sanitizeHtml((formData.get('description') || '') as string);
  const honeypot = formData.get('company');

  if (honeypot) {
    return { message: 'Bot odhalen.', success: false };
  }

  if (!title || !name || !email || !description) {
    return { message: 'Vyplňte všechna pole.', success: false };
  }

  try {
    const { error } = await supabase.from('post').insert([
      { title, name, email, description }
    ]);

    if (error) throw error;

    await resend.emails.send({
      from: process.env.EMAIL_FROM!,
      to: process.env.EMAIL_TO!,
      subject: `Nový formulář: ${title}`,
      replyTo: email,
      html: `
        <h2>Nová zpráva</h2>
        <p><strong>Jméno:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Předmět:</strong> ${title}</p>
        <p><strong>Text:</strong><br>${description.replace(/\n/g, '<br/>')}</p>
      `,
    });

    return { message: 'Zpráva byla úspěšně odeslána.', success: true };
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.error('CHYBA:', err.message);
    } else {
      console.error('CHYBA:', err);
    }
    return { message: 'Interní chyba serveru.', success: false };
  }
}
