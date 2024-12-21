import { NextFunction, Request, Response } from "express";
import { sendJsonPromise } from "../../helpers/sendJsonPromise.helper";
import { DashboardWishlistService } from "../../services/dashboard/dashboard.wishlist.service";

export class DashboardWishlistController {
  static async addToUserWishlist(req: Request, res: Response, next: NextFunction): Promise<void> {
    sendJsonPromise(DashboardWishlistService.update())(req, res, next);
  }

  static async createWishlist(req: Request, res: Response, next: NextFunction): Promise<void> {
    sendJsonPromise(DashboardWishlistService.create())(req, res, next);
  }

  static async deleteFromUserWishlist(req: Request, res: Response, next: NextFunction): Promise<void> {
    sendJsonPromise(DashboardWishlistService.deleteElement())(req, res, next);
  }

  static async deleteUserWishList(req: Request, res: Response, next: NextFunction): Promise<void> {
    sendJsonPromise(DashboardWishlistService.deleteWishlist())(req, res, next);
  }
}
