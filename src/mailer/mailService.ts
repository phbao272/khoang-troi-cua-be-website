import * as nodemailer from 'nodemailer';

export async function sendMail(to: [string], subject: string, html: any) {
  var transporter = nodemailer.createTransport({
    host: "smtp-relay.brevo.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PW,
    }
  });

  var mailOptions = {
    from: process.env.NODEMAILER_EMAIL,
    to,
    subject,
    html
  };

  return transporter.sendMail(mailOptions, (err: Error | null, info) => {
    if (err) {
      throw new Error(err.message);
    } else {
      return info;
    }
  });
}
