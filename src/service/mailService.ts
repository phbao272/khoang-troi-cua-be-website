import * as nodemailer from 'nodemailer';

export async function sendMail(subject: string, toEmails: string[], content: any) {
  var transporter = nodemailer.createTransport({
    service: "smtp-relay.brevo.com",
    port: 587,
    auth: {
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PW,
    },
  });

  var mailOptions = {
    from: process.env.NODEMAILER_EMAIL,
    to: toEmails,
    subject: subject,
    text: content,
  };

  return transporter.sendMail(mailOptions, (err: Error | null, info) => {
    if (err) {
      throw new Error(err.message);
    } else {
      console.log("Email Sent");
      return info;
    }
  });
}