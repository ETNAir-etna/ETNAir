/*
  Warnings:

  - You are about to alter the column `pricePerNight` on the `Property` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `DoublePrecision`.

*/
-- AlterTable
ALTER TABLE "Property" ALTER COLUMN "pricePerNight" SET DATA TYPE DOUBLE PRECISION;
