import { NextFunction, Request, Response } from "express";
import { ReservationService } from "../services/reservation.service";
import { sendJsonPromise } from "../helpers/sendJsonPromise.helper";

export class ReservationController {
    static async cancelReservation(req: Request, res: Response, next: NextFunction): Promise<void> {
        sendJsonPromise(ReservationService.cancel())(req, res, next);
    }

    static async createReservation(req: Request, res: Response, next: NextFunction): Promise<void> {
        sendJsonPromise(ReservationService.create())(req, res, next);
    }

    static async updateReservation(req: Request, res: Response, next: NextFunction): Promise<void> {
        sendJsonPromise(ReservationService.update())(req, res, next);
    }

}
