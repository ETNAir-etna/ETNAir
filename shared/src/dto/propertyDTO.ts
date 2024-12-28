import { Property as PrismaProperty } from "@prisma/client";
import { Property } from "../types/Property";


export const PropertyDTO = (property: PrismaProperty): Property => {
    return {
        id: property.id,
        ownerId: property.ownerId,
        title: property.title,
        description: property.description?.trim() === "" ? null : property.description ?? null,
        propertyType: property.propertyType,
        occupancyMax: property.occupancyMax ?? null,
        totalBedrooms: property.totalBedrooms ?? null,
        totalBathrooms: property.totalBathrooms ?? null,
        area: property.area ?? null,
        pricePerNight: property.pricePerNight,
        mainImgUrl: property.mainImgUrl,
        roomNumber: property.roomNumber ?? null,
        floorNumber: property.floorNumber ?? null,
        unitNumber: property.unitNumber ?? null,
        streetNumber: property.streetNumber,
        streetName: property.streetName,
        city: property.city,
        zip: property.zip ?? null,
        country: property.country,
        latitude: property.latitude ?? null,
        longitude: property.longitude ?? null,
        equipments: property.equipments || [],
        pictures: property.pictures || [],
        publishedAt: property.publishedAt,
    };
};
