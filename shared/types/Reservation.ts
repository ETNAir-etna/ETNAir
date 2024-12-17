import { reservationStatus, reservationType } from "@prisma/client";
import { Reservation as PrismaReservation } from '@prisma/client';

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
    status?: reservationStatus
    reservationType?: reservationType           
    createdAt?: Date
    updatedAt?: Date
}


export const ReservationDTO = (reservation: PrismaReservation): Reservation => {
    return {
        guestId: reservation.guestId ,
        hostId: reservation.hostId ,
        propertyId: reservation.propertyId ,
        startDate: reservation.startDate ,
        endDate  : reservation.endDate ,
        checkIn: reservation.checkIn ,
        checkOut: reservation.checkOut ,
        NumberOfguests: reservation.NumberOfguests ,
        totalPrice: reservation.totalPrice ,
        status: reservation.status ,
        reservationType: reservation.reservationType ,   
    }
}