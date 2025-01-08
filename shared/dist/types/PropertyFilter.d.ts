import { Prisma, PropertyType } from "@prisma/client";
export type PropertyFilter = {
    publishedAt?: Prisma.SortOrder;
    pricePerNight?: Prisma.SortOrder;
    country?: string;
    city?: string;
    propertyType?: PropertyType;
    roomNumber?: number;
    occupancyMax?: number;
    totalBedrooms?: number;
    equipments?: string[];
    numberByPage: number;
    page: number;
};
