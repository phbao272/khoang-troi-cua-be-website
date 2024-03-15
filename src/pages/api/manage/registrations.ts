import type { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from "next-auth/next"
import { authOptions } from "../auth/[...nextauth]"

import prisma from "@/libs/prisma";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = await getServerSession(req, res, authOptions)

  if (!!session) res.send({
    error: "Unauthorized.",
  });

  const registrations = await prisma.memberRegistration.findMany();
  return res.status(200).json({
    registrations: registrations
  });
}
