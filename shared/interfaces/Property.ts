import { Reservation } from "./Reservation"
import { Review } from "./Review"

export interface Property {
    title      : string
    description?: string
    propertyType: string
    occupancyMax?  : number
    totalBedrooms? : number
    totalBathrooms?: number
    area?: number
    pricePerNight: number
    mainImgUrl : string
    publishedAt: Date
    updatedAt  : Date
    roomNumber?: number
    floorNumber?: number
    unitNumber?: number
    streetNumber: number
    streetName: string
    city: string
    zip?: string
    country?: string
    latitude? : number
    longitude?: number
    equipments : string[]
    ownerId : string
    pictures: string[]
    reservations: Reservation[]
    reviews: Review[]
}