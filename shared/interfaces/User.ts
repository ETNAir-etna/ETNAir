import { Reservation } from "./Reservation"
import { Wishlist } from "./Wishlist"
import { Review } from "./Review"
import { Property } from "./Property"

export interface User {
    email: string                
    password: string
    firstName: string                
    lasrName: string                
    gender: string
    phoneNumber: string             
    role: string                 
    status: string[]
    createdAt: Date              
    updatedAt: Date             
    guestRating: number
    hostRating: number
    summary: string              
    profileImg:string
    requestForDelete: boolean      
    isSuperHost: boolean               
    wishlists: Wishlist[]
    hostReservations: Reservation[]
    guestReservations: Reservation[]
    reviewsSent: Review[]
    reviewsReceived: Review[]
    properties: Property[]
}
