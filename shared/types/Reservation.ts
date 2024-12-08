export type Reservation = {                    
    guestId: string
    hostId: string
    propertyId: string
    startDate: Date
    endDate  : Date
    checkIn: string
    checkOut: string
    NumberOfguests: number
    totalPrice: number
    status: string
    reservationType: string           
    createdAt: Date
    updatedAt: Date
}