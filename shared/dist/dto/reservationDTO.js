"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReservationDTO = void 0;
const ReservationDTO = (reservation) => {
    var _a;
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
        reservationType: (_a = reservation.reservationType) !== null && _a !== void 0 ? _a : null,
        createdAt: reservation.createdAt,
        updatedAt: reservation.updatedAt,
    };
};
exports.ReservationDTO = ReservationDTO;
