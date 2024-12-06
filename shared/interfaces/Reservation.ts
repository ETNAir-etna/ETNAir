export interface Reservation {                    
    guestId: string
    hostId: string
    propertyId: string
    startDate: Date
    endDate  : Date
    NumberOfguests: number
    totalPrice: number
    status: string
    reservationType: string           
    createdAt: Date
    updatedAt: Date
}