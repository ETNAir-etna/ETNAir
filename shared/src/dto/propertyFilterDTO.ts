import { Prisma, Property as PrismaProperty } from '@prisma/client';
import { PropertyFilter } from '../types/PropertyFilter';

export const PropertyFilterDTO = (property: PrismaProperty, numberByPage: number, page: number, publishedAt: Prisma.SortOrder, pricePerNight: Prisma.SortOrder ): PropertyFilter => {
    return {
        publishedAt : publishedAt ?? undefined,
        pricePerNight : pricePerNight ?? undefined,
        country: property.country ?? undefined,
        city: property.city ?? undefined,
        propertyType: property.propertyType ?? undefined,
        roomNumber: property.roomNumber ?? undefined,
        occupancyMax: property.occupancyMax ?? undefined,
        totalBedrooms: property.totalBedrooms ?? undefined,
        equipments: property.equipments ?? undefined,
        numberByPage: numberByPage ?? 2,
        page: page ?? 1
    }
};