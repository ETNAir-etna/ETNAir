"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PropertyDTO = void 0;
const PropertyDTO = (property) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
    return {
        id: property.id,
        ownerId: property.ownerId,
        title: property.title,
        description: ((_a = property.description) === null || _a === void 0 ? void 0 : _a.trim()) === "" ? null : (_b = property.description) !== null && _b !== void 0 ? _b : null,
        propertyType: property.propertyType,
        occupancyMax: (_c = property.occupancyMax) !== null && _c !== void 0 ? _c : null,
        totalBedrooms: (_d = property.totalBedrooms) !== null && _d !== void 0 ? _d : null,
        totalBathrooms: (_e = property.totalBathrooms) !== null && _e !== void 0 ? _e : null,
        area: (_f = property.area) !== null && _f !== void 0 ? _f : null,
        pricePerNight: property.pricePerNight,
        mainImgUrl: property.mainImgUrl,
        roomNumber: (_g = property.roomNumber) !== null && _g !== void 0 ? _g : null,
        floorNumber: (_h = property.floorNumber) !== null && _h !== void 0 ? _h : null,
        unitNumber: (_j = property.unitNumber) !== null && _j !== void 0 ? _j : null,
        streetNumber: property.streetNumber,
        streetName: property.streetName,
        city: property.city,
        zip: (_k = property.zip) !== null && _k !== void 0 ? _k : null,
        country: property.country,
        latitude: (_l = property.latitude) !== null && _l !== void 0 ? _l : null,
        longitude: (_m = property.longitude) !== null && _m !== void 0 ? _m : null,
        equipments: property.equipments || [],
        pictures: property.pictures || [],
        publishedAt: property.publishedAt,
        rating: (_o = property.rating) !== null && _o !== void 0 ? _o : 0,
    };
};
exports.PropertyDTO = PropertyDTO;
