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
export declare const PropertyFilterDTO: (property: PrismaProperty, numberByPage: number, page: number, publishedAt: Prisma.SortOrder, pricePerNight: Prisma.SortOrder, rating: Prisma.Decimal) => PropertyFilter;
