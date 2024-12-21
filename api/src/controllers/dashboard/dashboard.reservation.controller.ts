import { NextFunction, Request, Response } from "express";
import { sendJsonPromise } from "../../helpers/sendJsonPromise.helper";
import { DashboardReservationService } from "../../services/dashboard/dashboard.reservation.service";

export class DashboardReservationController {
  
  static async cancelReservation(req: Request, res: Response, next: NextFunction): Promise<void> {
    sendJsonPromise(DashboardReservationService.cancel())(req, res, next);
  }

  static async createReservation(req: Request, res: Response, next: NextFunction): Promise<void> {
    sendJsonPromise(DashboardReservationService.create())(req, res, next);
  }

  static async updateReservation(req: Request, res: Response, next: NextFunction): Promise<void> {
    sendJsonPromise(DashboardReservationService.update())(req, res, next);
  }
}
