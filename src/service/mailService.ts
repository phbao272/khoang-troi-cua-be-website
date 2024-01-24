import * as nodemailer from 'nodemailer';

export async function sendMail(subject: any, toEmail: any, otpText: any) {
  var transporter = nodemailer.createTransport({
    service: "brevo",
    auth: {
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PW,
    },
  });

  var mailOptions = {
    from: process.env.NODEMAILER_EMAIL,
    to: toEmail,
    subject: subject,
    text: otpText,
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