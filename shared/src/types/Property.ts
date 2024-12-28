import { PropertyType } from "@prisma/client";

export type Property = {
  id: string;
  title: string;
  description?: string | null;
  propertyType: PropertyType;
  occupancyMax?: number | null;
  totalBedrooms?: number | null;
  totalBathrooms?: number | null;
  area?: number | null;
  pricePerNight: number;
  mainImgUrl: string;
  roomNumber?: number | null;
  floorNumber?: number | null;
  unitNumber?: number | null;
  streetNumber: number;
  streetName: string;
  city: string;
  zip?: string | null;
  country: string;
  latitude?: number | null;
  longitude?: number | null;
  equipments?: string[];
  pictures: string[];
  ownerId: string;
  publishedAt: Date;
};

