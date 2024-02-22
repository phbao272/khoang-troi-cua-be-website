import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from "@/libs/prisma";
import { sendMail } from "../../service/mailService";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { news, content } = req.body;

  if (!news || !content) {
    return res.status(400).json({ message: 'Content not found' });
  }

  const emails = await prisma.testEmail.findMany();
  const allEmails = emails.flatMap((user) => user.email);
  const title = news.title

  console.log(title, allEmails, content)

  // await new Promise((resolve, reject) => {
  //   try {
  //     const result = sendMail(title, allEmails, content);
  //     resolve(result);
  //     res.status(200).json({message: 'Message sent!'});
  //   } catch (err: any) {
  //     reject(err);
  //     return res.status(500).json({
  //       error: err.message || 'Something went wrong'
  //     });
  //   }
  // })

  return;
}