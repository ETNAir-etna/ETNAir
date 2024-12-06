/*
  Warnings:

  - You are about to drop the column `description` on the `Reservation` table. All the data in the column will be lost.
  - You are about to drop the column `prrofileImg` on the `Review` table. All the data in the column will be lost.
  - Added the required column `checkIn` to the `Reservation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `checkOut` to the `Reservation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `profileImg` to the `Review` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Reservation" DROP COLUMN "description",
ADD COLUMN     "checkIn" TEXT NOT NULL,
ADD COLUMN     "checkOut" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Review" DROP COLUMN "prrofileImg",
ADD COLUMN     "directedTo" TEXT,
ADD COLUMN     "profileImg" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_directedTo_fkey" FOREIGN KEY ("directedTo") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
