import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from "@/libs/prisma";
import { informMemberRestrationComplete } from '@/mailer/memberRegistrationComplete';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { data } = req.body;

  if (!data) {
    return res.status(400).json({ message: 'Content not found' });
  }

  await prisma.member.create({
    data: {
      fullName: data.full_name,
      birthday: data.birthday,
      phoneNumber: data.phone_number,
      email: data.email,
      address: data.address,
      workPlace: data.work_place,
      hasSocialActivities: data.has_social_activities,
      memories: data.memories,
      position: data.position,
      hopeToReceive: data.hope_to_receive
    },
  });

  await informMemberRestrationComplete(data);

  return;
}