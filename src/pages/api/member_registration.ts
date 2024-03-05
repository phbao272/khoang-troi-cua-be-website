import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from "@/libs/prisma";
import { sendMail } from '@mailer/mailService';
import mailData from '@mailer/templates/member-registration-complete';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const data = req.body;

  if (!data) {
    return res.status(400).json({ message: 'Content not found' });
  }

  await prisma.member.create({
    data: {
      fullName: data.full_name,
      birthday: new Date(data.birthday),
      phoneNumber: data.phone_number,
      email: data.email,
      address: data.address,
      workPlace: data.work_place,
      hasSocialActivities: data.has_social_activities === "1",
      memories: data.memories,
      position: data.position,
      hopeToReceive: data.hope_to_receive
    },
  });

  await new Promise(async (resolve, reject) => {
    try {
      const result = await sendMail(
        [data.email],
        'CẢM ƠN BẠN ĐÃ ĐĂNG KÝ THÀNH VIÊN KHOẢNG TRỜI CỦA BÉ',
        mailData(data)
      );
      resolve(result);
      res.status(200).json({message: 'Mail sent!'});
    } catch (err: any) {
      reject(err);
      return res.status(500).json({
        error: err.message || 'Something went wrong'
      });
    }
  })

  

  return;
}
