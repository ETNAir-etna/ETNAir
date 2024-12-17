
import { PropertyType } from "@prisma/client";
import { Property as PrismaProperty } from '@prisma/client';


export type Property = {
    id: string
    title: string
    description?: string | null
    propertyType: PropertyType
    occupancyMax?: number | null
    totalBedrooms?: number | null
    totalBathrooms?: number | null
    area?: number | null
    pricePerNight: number
    mainImgUrl: string
    roomNumber?: number | null
    floorNumber?: number | null
    unitNumber?: number | null
    streetNumber: number
    streetName: string
    city: string
    zip?: string | null
    country: string
    latitude?: number | null
    longitude?: number | null
    equipments?: string[]
    pictures: string[]
    ownerId: string
};

export const PropertyDTO = (property: PrismaProperty): Property => {
    return {
        id: property.id,
        ownerId: property.ownerId,
        title: property.title,
        description: property.description || "",
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
        pictures: property.pictures || []
    };
};