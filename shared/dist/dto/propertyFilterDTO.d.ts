import { Prisma, Property as PrismaProperty } from '@prisma/client';
import { PropertyFilter } from '../types/PropertyFilter';
export declare const PropertyFilterDTO: (property: PrismaProperty, numberByPage: number, page: number, publishedAt: Prisma.SortOrder, pricePerNight: Prisma.SortOrder) => PropertyFilter;
