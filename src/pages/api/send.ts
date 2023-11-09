import type { NextApiRequest, NextApiResponse } from "next";
import { resend } from "@/components/emails/resend";
import WaitlistEmail from "@/components/emails/components/Waitlist";

const send = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  switch (method) {
    case "GET": {
      const data = await resend.emails.send({
        from: "ktcb@resend.dev",
        to: ["pqbao27@gmail.com"],
        subject: "Đăng ký làm nhà hảo tâm",
        react: WaitlistEmail({ name: "Đăng ký làm nhà hảo tâm" }),
        text: "Đăng ký làm nhà hảo tâm",
      });

      return res.status(200).send(data);
    }
    default:
      res.setHeader("Allow", ["GET"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
};

export default send;
