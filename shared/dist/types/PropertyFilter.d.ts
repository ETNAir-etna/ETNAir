import { Prisma, PropertyType } from "@prisma/client";
export type PropertyFilter = {
    publishedAt?: Prisma.SortOrder;
    pricePerNight?: Prisma.SortOrder;
    country?: string;
    city?: string;
    propertyType?: PropertyType;
    roomNumber?: string;
    occupancyMax?: string;
    totalBedrooms?: string;
    equipments?: string[];
    numberByPage: number;
    page: number;
    rating: Prisma.Decimal;
};
