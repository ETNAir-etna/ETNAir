import { Reservation } from "./Reservation"
import { Review } from "./Review"

export type Property = {
    title: string
    description?: string | null
    propertyType: string
    occupancyMax?  : number | null
    totalBedrooms? : number | null
    totalBathrooms?: number | null
    area?: number | null
    pricePerNight: number
    mainImgUrl : string
    publishedAt: Date
    updatedAt  : Date
    roomNumber?: number | null
    floorNumber?: number | null
    unitNumber?: number | null
    streetNumber: number
    streetName: string
    city: string
    zip?: string | null
    country?: string | null
    latitude? : number | null
    longitude?: number | null
    equipments : string[]
    ownerId : string
    pictures?: string[]
    reservations?: Reservation[]
    reviews?: Review[]
    
}