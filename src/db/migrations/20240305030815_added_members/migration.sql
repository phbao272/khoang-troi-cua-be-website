-- CreateTable
CREATE TABLE "Member" (
    "id" SERIAL NOT NULL,
    "fullName" TEXT NOT NULL,
    "birthday" TIMESTAMP(3) NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "workPlace" TEXT NOT NULL,
    "hasSocialActivities" BOOLEAN NOT NULL,
    "memories" TEXT NOT NULL,
    "position" TEXT NOT NULL,
    "hopeToReceive" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Member_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Member_fullName_key" ON "Member"("fullName");
