import { Reservation as PrismaReservation } from "@prisma/client";
import { Reservation } from "../types/Reservation";
export declare const ReservationDTO: (reservation: PrismaReservation) => Reservation;
