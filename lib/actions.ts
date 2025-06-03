"use server"

import { Resend } from 'resend';
import db from './db';
import sanitizeHtml from 'sanitize-html'; 
import validator from 'validator'; 

const resend = new Resend(process.env.RESEND_API_KEY);

type FormStateType = {
  message: string | null;
  success: boolean;
};

export async function addPost(
  prevState: FormStateType,
  formData: FormData
) {
  const titleRaw = formData.get('title') as string;
  const nameRaw = formData.get('name') as string;
  const email = formData.get('email') as string;
  const descriptionRaw = formData.get('description') as string;
  const honeypot = formData.get('company') as string; // for spam protection

  if (honeypot) {
    return { message: 'Bot detection failed.', success: false };
  }

  if (!titleRaw || !nameRaw || !email || !descriptionRaw) {
    return { message: 'Vyplňte všechna pole.', success: false };
  }

  // Email validation
  if (!validator.isEmail(email)) {
    return { message: 'Neplatný email.', success: false };
  }

  // Sanitize inputs to prevent XSS if data is ever rendered in UI
  const title = sanitizeHtml(titleRaw, { allowedTags: [], allowedAttributes: {} }).trim();
  const name = sanitizeHtml(nameRaw, { allowedTags: [], allowedAttributes: {} }).trim();
  const description = sanitizeHtml(descriptionRaw, {
    allowedTags: ['b', 'i', 'em', 'strong', 'br', 'p'],
    allowedAttributes: {},
  }).trim();

  try {
    const stmt = db.prepare(`
      INSERT INTO post (title, name, email, description)
      VALUES (?, ?, ?, ?)
    `);
    stmt.run(title, name, email, description);

    await resend.emails.send({
      from: process.env.EMAIL_FROM!,
      to: process.env.EMAIL_TO!,
      subject: `Nový formulář: ${title}`,
      replyTo: email,
      html: `
        <h2>Nová zpráva z webu</h2>
        <p><strong>Jméno:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Předmět:</strong> ${title}</p>
        <p><strong>Popis:</strong><br/>${description.replace(/\n/g, '<br/>')}</p>
      `,
    });

    return { message: 'Zpráva byla odeslána.', success: true };
  } catch (err) {
    console.error(err);
    return { message: 'Chyba při odeslání zprávy.', success: false };
  }
}
