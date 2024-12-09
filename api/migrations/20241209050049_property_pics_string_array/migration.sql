/*
  Warnings:

  - You are about to drop the `PropertyImages` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "PropertyImages" DROP CONSTRAINT "PropertyImages_propertyId_fkey";

-- AlterTable
ALTER TABLE "Property" ADD COLUMN     "pictures" TEXT[];

-- DropTable
DROP TABLE "PropertyImages";
