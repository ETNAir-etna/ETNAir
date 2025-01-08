import { Prisma, Property as PrismaProperty } from '@prisma/client';
import { PropertyFilter } from '../types/PropertyFilter';
/**
 * @param  {PrismaProperty} property
 * @param  {number} numberByPage
 * @param  {number} page
 * @param  {Prisma.SortOrder} publishedAt
 * @param  {Prisma.SortOrder} pricePerNight
 * @param  {Prisma.Decimal} rating
 * @returns {PropertyFilter} page
 * 
 */
export const PropertyFilterDTO = (property: PrismaProperty, numberByPage: number, page: number, publishedAt: Prisma.SortOrder, pricePerNight: Prisma.SortOrder, rating: Prisma.Decimal): PropertyFilter => {
    return {
        publishedAt: publishedAt ?? undefined,
        pricePerNight: pricePerNight ?? undefined,
        country: property.country ?? undefined,
        city: property.city ?? undefined,
        propertyType: property.propertyType ?? undefined,
        roomNumber: property.roomNumber ?? undefined,
        occupancyMax: property.occupancyMax ?? undefined,
        totalBedrooms: property.totalBedrooms ?? undefined,
        equipments: property.equipments ?? undefined,
        numberByPage: numberByPage,
        page: page,
        rating: rating ?? undefined
    };
};
