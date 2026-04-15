"use server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export type EmailData = {
  name: string;
  email: string;
  message: string;
};

export async function sendEmail(data: EmailData) {
  const { name, email, message } = data;

  const { error } = await resend.emails.send({
    from: "Portfolio Contact <onboarding@resend.dev>", // swap for your domain once verified
    to: "issam42069@gmail.com",
    subject: `New message from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
  });

  if (error) {
    throw new Error("Failed to send email");
  }
}
