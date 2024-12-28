import { Reservation as PrismaReservation } from "@prisma/client";
import { Reservation } from "../types/Reservation";

export const ReservationDTO = (reservation: PrismaReservation): Reservation => {
    return {
        guestId: reservation.guestId,
        hostId: reservation.hostId,
        propertyId: reservation.propertyId,
        startDate: reservation.startDate,
        endDate: reservation.endDate,
        checkIn: reservation.checkIn,
        checkOut: reservation.checkOut,
        NumberOfguests: reservation.NumberOfguests,
        totalPrice: reservation.totalPrice,
        status: reservation.status,
        reservationType: reservation.reservationType ?? null, 
        createdAt: reservation.createdAt,
        updatedAt: reservation.updatedAt,
    };
};