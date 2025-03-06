"use server";
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail({
  to,
  subject,
  text,
}: {
  to: string;
  subject: string;
  text: string;
}) {
  if (!process.env.RESEND_API_KEY) {
    throw new Error("RESEND_API_KEY environment variable is not set");
  }

  try {
    const { data, error } = await resend.emails.send({
        from: 'Acme <onboarding@resend.dev>',
        to,
        subject,
        text,
    });

    if (error) {
        return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
    } catch (error) {
    return Response.json({ error }, { status: 500 });
    }
}