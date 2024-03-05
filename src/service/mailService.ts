import * as nodemailer from 'nodemailer';
import ejs from 'ejs';
import he from 'he';

export async function sendMail(to: [string], subject: string, html: any) {
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
    to,
    subject,
    html
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

export async function renderEmailData(template: string, data: any) {
  const mailBody = await ejs.renderFile(`/var/task/mailer/templates/${template}`, data);
  const fullMail = await ejs.renderFile("/var/task/mailer/templates/template.ejs", { content: mailBody });
  return he.decode(fullMail);
}
