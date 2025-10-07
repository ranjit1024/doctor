/*
  Warnings:

  - You are about to drop the column `phonumber` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `verify` on the `User` table. All the data in the column will be lost.
  - Made the column `name` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "phonumber",
DROP COLUMN "verify",
ALTER COLUMN "name" SET NOT NULL;

-- CreateTable
CREATE TABLE "Verify" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "mobilenumber" TEXT NOT NULL,
    "verify" BOOLEAN,

    CONSTRAINT "Verify_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Verify" ADD CONSTRAINT "Verify_email_fkey" FOREIGN KEY ("email") REFERENCES "User"("email") ON DELETE RESTRICT ON UPDATE CASCADE;
