"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PropertyFilterDTO = void 0;
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
const PropertyFilterDTO = (property, numberByPage, page, publishedAt, pricePerNight, rating) => {
    var _a, _b, _c, _d, _e, _f, _g;
    return {
        publishedAt: publishedAt !== null && publishedAt !== void 0 ? publishedAt : undefined,
        pricePerNight: pricePerNight !== null && pricePerNight !== void 0 ? pricePerNight : undefined,
        country: (_a = property.country) !== null && _a !== void 0 ? _a : undefined,
        city: (_b = property.city) !== null && _b !== void 0 ? _b : undefined,
        propertyType: (_c = property.propertyType) !== null && _c !== void 0 ? _c : undefined,
        roomNumber: (_d = property.roomNumber) !== null && _d !== void 0 ? _d : undefined,
        occupancyMax: (_e = property.occupancyMax) !== null && _e !== void 0 ? _e : undefined,
        totalBedrooms: (_f = property.totalBedrooms) !== null && _f !== void 0 ? _f : undefined,
        equipments: (_g = property.equipments) !== null && _g !== void 0 ? _g : undefined,
        numberByPage: numberByPage,
        page: page,
        rating: rating !== null && rating !== void 0 ? rating : undefined
    };
};
exports.PropertyFilterDTO = PropertyFilterDTO;
