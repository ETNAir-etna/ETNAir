import { NextFunction, Request, Response } from "express";
import { ReviewService } from "../services/review.service";
import { sendJsonPromise } from "../helpers/sendJsonPromise.helper";

export class ReviewController {

    static async createReview(req: Request, res: Response, next: NextFunction): Promise<void> {
        sendJsonPromise(ReviewService.create())(req, res, next);
    }

    static async deleteReview(req: Request, res: Response, next: NextFunction): Promise<void> {
        sendJsonPromise(ReviewService.delete())(req, res, next);
    }

    static async updateReview(req: Request, res: Response, next: NextFunction): Promise<void> {
        sendJsonPromise(ReviewService.update())(req, res, next);
    }

}
