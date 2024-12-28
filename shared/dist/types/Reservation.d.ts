import { reservationStatus, reservationType } from "@prisma/client";
export type Reservation = {
    guestId: string;
    hostId: string;
    propertyId: string;
    startDate: Date;
    endDate: Date;
    checkIn: string;
    checkOut: string;
    NumberOfguests: number;
    totalPrice: number;
    status: reservationStatus;
    reservationType?: reservationType | null;
    createdAt: Date;
    updatedAt: Date;
};
