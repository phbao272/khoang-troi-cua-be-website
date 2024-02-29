import type { NextApiRequest, NextApiResponse } from 'next'
import { sendMail } from "../../service/mailService";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { name, email, message } = req.body;

  if (!name || !name || !message) {
    return res.status(400).json({ message: 'Please fill out the necessary fields' });
  }

  await new Promise((resolve, reject) => {
    try {
      const info = sendMail(
        `Message from ${name}`,
        email,
        `${message} | Sent from: ${email}`
      );
      resolve(info);
      res.status(200).json({message: 'Message sent!'});
    } catch (err: any) {
      reject(err);
      return res.status(500).json({
        error: err.message || 'Something went wrong'
      });
    }
  })

  return;
}