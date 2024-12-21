import { NextFunction, Request, Response } from "express";
import { sendJsonPromise } from "../../helpers/sendJsonPromise.helper";
import { DashboardReviewService } from "../../services/dashboard/dashboard.review.service";

export class DashboardReviewController {

  static async createReview(req: Request, res: Response, next: NextFunction): Promise<void> {
    sendJsonPromise(DashboardReviewService.create())(req, res, next);
  }

  static async deleteReview(req: Request, res: Response, next: NextFunction): Promise<void> {
    sendJsonPromise(DashboardReviewService.delete())(req, res, next);
  }

  static async updateReview(req: Request, res: Response, next: NextFunction): Promise<void> {
    sendJsonPromise(DashboardReviewService.update())(req, res, next);
  }
}
