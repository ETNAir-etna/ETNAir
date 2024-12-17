-- CreateEnum
CREATE TYPE "PropertyType" AS ENUM ('APARTMENT', 'HOUSE', 'VILLA', 'BUNGALOW', 'CONDO', 'LOFT', 'ROOM', 'STUDIO');

-- CreateEnum
CREATE TYPE "reservationType" AS ENUM ('GUEST_REQUEST', 'HOST_REQUEST');

-- CreateEnum
CREATE TYPE "reservationStatus" AS ENUM ('PENDING', 'ACCEPTED', 'REJECTED', 'PAYMENT_PROCESSING', 'PAYMENT_RECEIVED', 'PAYMENT_FAI', 'CANCELED', 'COMPLETED');

-- CreateEnum
CREATE TYPE "reviewTypes" AS ENUM ('USER', 'PROPERTY');

-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('OTHER', 'FEMALE', 'MALE');

-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'USER');

-- CreateTable
CREATE TABLE "Property" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "propertyType" "PropertyType" NOT NULL,
    "occupancyMax" INTEGER,
    "totalBedrooms" INTEGER,
    "totalBathrooms" INTEGER,
    "area" DOUBLE PRECISION,
    "pricePerNight" INTEGER NOT NULL,
    "mainImgUrl" TEXT NOT NULL,
    "publishedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "roomNumber" INTEGER,
    "floorNumber" INTEGER,
    "unitNumber" INTEGER,
    "streetNumber" INTEGER NOT NULL,
    "streetName" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "zip" TEXT,
    "country" TEXT NOT NULL,
    "latitude" DOUBLE PRECISION,
    "longitude" DOUBLE PRECISION,
    "equipments" TEXT[],
    "ownerId" TEXT NOT NULL,
    "pictures" TEXT[],

    CONSTRAINT "Property_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Reservation" (
    "id" TEXT NOT NULL,
    "guestId" TEXT NOT NULL,
    "hostId" TEXT NOT NULL,
    "propertyId" TEXT NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3) NOT NULL,
    "checkIn" TEXT NOT NULL,
    "checkOut" TEXT NOT NULL,
    "NumberOfguests" INTEGER NOT NULL,
    "totalPrice" DOUBLE PRECISION NOT NULL,
    "status" "reservationStatus" NOT NULL DEFAULT 'PENDING',
    "reservationType" "reservationType" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Reservation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Review" (
    "id" TEXT NOT NULL,
    "createdBy" TEXT,
    "fullName" TEXT NOT NULL,
    "profileImg" TEXT NOT NULL,
    "reviewType" "reviewTypes" NOT NULL,
    "reservationId" TEXT,
    "propertyId" TEXT,
    "content" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,
    "publishedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "directedTo" TEXT,

    CONSTRAINT "Review_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "firstName" VARCHAR(35),
    "lastName" VARCHAR(35),
    "gender" "Gender" DEFAULT 'OTHER',
    "phoneNumber" TEXT,
    "role" "Role" NOT NULL DEFAULT 'USER',
    "status" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "guestRating" DOUBLE PRECISION,
    "hostRating" DOUBLE PRECISION,
    "summary" TEXT,
    "profileImg" TEXT,
    "requestForDelete" BOOLEAN NOT NULL DEFAULT false,
    "rating" DOUBLE PRECISION,
    "isSuperHost" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Wishlist" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "propertyId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Wishlist_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WishlistProperty" (
    "wishlistId" TEXT NOT NULL,
    "propertyId" TEXT NOT NULL,

    CONSTRAINT "WishlistProperty_pkey" PRIMARY KEY ("wishlistId","propertyId")
);

-- CreateIndex
CREATE INDEX "Property_pricePerNight_idx" ON "Property"("pricePerNight");

-- CreateIndex
CREATE INDEX "Property_ownerId_idx" ON "Property"("ownerId");

-- CreateIndex
CREATE INDEX "Property_city_idx" ON "Property"("city");

-- CreateIndex
CREATE INDEX "Property_country_idx" ON "Property"("country");

-- CreateIndex
CREATE INDEX "Property_equipments_idx" ON "Property"("equipments");

-- CreateIndex
CREATE INDEX "Property_totalBedrooms_idx" ON "Property"("totalBedrooms");

-- CreateIndex
CREATE INDEX "Property_propertyType_idx" ON "Property"("propertyType");

-- CreateIndex
CREATE INDEX "Property_occupancyMax_idx" ON "Property"("occupancyMax");

-- CreateIndex
CREATE INDEX "Reservation_guestId_idx" ON "Reservation"("guestId");

-- CreateIndex
CREATE INDEX "Reservation_hostId_idx" ON "Reservation"("hostId");

-- CreateIndex
CREATE INDEX "Reservation_propertyId_idx" ON "Reservation"("propertyId");

-- CreateIndex
CREATE INDEX "Reservation_status_idx" ON "Reservation"("status");

-- CreateIndex
CREATE INDEX "Reservation_createdAt_idx" ON "Reservation"("createdAt");

-- CreateIndex
CREATE INDEX "Reservation_startDate_endDate_idx" ON "Reservation"("startDate", "endDate");

-- CreateIndex
CREATE INDEX "Review_reviewType_idx" ON "Review"("reviewType");

-- CreateIndex
CREATE INDEX "Review_id_idx" ON "Review"("id");

-- CreateIndex
CREATE INDEX "Review_rating_idx" ON "Review"("rating");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_phoneNumber_key" ON "User"("phoneNumber");

-- CreateIndex
CREATE INDEX "User_email_idx" ON "User"("email");

-- CreateIndex
CREATE INDEX "User_phoneNumber_idx" ON "User"("phoneNumber");

-- CreateIndex
CREATE INDEX "User_status_idx" ON "User"("status");

-- CreateIndex
CREATE INDEX "User_role_idx" ON "User"("role");

-- CreateIndex
CREATE INDEX "User_createdAt_idx" ON "User"("createdAt");

-- CreateIndex
CREATE INDEX "User_guestRating_idx" ON "User"("guestRating");

-- CreateIndex
CREATE INDEX "User_hostRating_idx" ON "User"("hostRating");

-- CreateIndex
CREATE INDEX "User_requestForDelete_idx" ON "User"("requestForDelete");

-- CreateIndex
CREATE INDEX "Wishlist_userId_idx" ON "Wishlist"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Wishlist_name_userId_key" ON "Wishlist"("name", "userId");

-- AddForeignKey
ALTER TABLE "Property" ADD CONSTRAINT "Property_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reservation" ADD CONSTRAINT "Reservation_guestId_fkey" FOREIGN KEY ("guestId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reservation" ADD CONSTRAINT "Reservation_hostId_fkey" FOREIGN KEY ("hostId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reservation" ADD CONSTRAINT "Reservation_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "Property"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_directedTo_fkey" FOREIGN KEY ("directedTo") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_createdBy_fkey" FOREIGN KEY ("createdBy") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_reservationId_fkey" FOREIGN KEY ("reservationId") REFERENCES "Reservation"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "Property"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Wishlist" ADD CONSTRAINT "Wishlist_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WishlistProperty" ADD CONSTRAINT "WishlistProperty_wishlistId_fkey" FOREIGN KEY ("wishlistId") REFERENCES "Wishlist"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WishlistProperty" ADD CONSTRAINT "WishlistProperty_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "Property"("id") ON DELETE CASCADE ON UPDATE CASCADE;
