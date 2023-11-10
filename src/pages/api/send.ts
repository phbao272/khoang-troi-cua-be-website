import type { NextApiRequest, NextApiResponse } from "next";
import WaitlistEmail from "@/components/emails/components/Waitlist";

import { render } from "@react-email/render";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "method.apps4@gmail.com",
    pass: "siqj ikol pool dzyi",
  },
});

const send = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  switch (method) {
    case "GET": {
      const emailHtml = render(
        WaitlistEmail({ name: "Đăng ký làm nhà hảo tâm" }) as React.ReactElement
      );

      const options: Mail.Options = {
        from: "method.apps4@gmail.com",
        to: "khanhcong1909@gmail.com",
        subject: "Hello ✔",
        text: "Hello world?",
        html: emailHtml,
      };

      await transporter.sendMail(options);

      return res.status(200).send("send mail successfully!");
    }
    default:
      res.setHeader("Allow", ["GET"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
};

export default send;
