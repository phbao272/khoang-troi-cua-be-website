import { Prisma, PrismaClient } from "@prisma/client";
import { DefaultArgs } from "@prisma/client/runtime/library";

let prisma: PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>;

if (process.env.NODE_ENV === "production") {
  
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prisma = global.prisma;
}

export default prisma;
