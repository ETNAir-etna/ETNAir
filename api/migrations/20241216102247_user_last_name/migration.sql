/*
  Warnings:

  - You are about to drop the column `lasrName` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "lasrName",
ADD COLUMN     "lastName" VARCHAR(35);
