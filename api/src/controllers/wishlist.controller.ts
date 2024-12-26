import { NextFunction, Request, Response } from "express";
import { WishlistService } from "../services/wishlist.service";
import { sendJsonPromise } from "../helpers/sendJsonPromise.helper";

// router.put('/:token', DashboardWishlistController.addToUserWishlist);

export class WishlistController {
    static async addToUserWishlist(req: Request, res: Response, next: NextFunction): Promise<void> {
        sendJsonPromise(WishlistService.add())(req, res, next);
    }

    static async createWishlist(req: Request, res: Response, next: NextFunction): Promise<void> {
        sendJsonPromise(WishlistService.create())(req, res, next);
    }

    static async deleteFromUserWishlist(req: Request, res: Response, next: NextFunction): Promise<void> {
        sendJsonPromise(WishlistService.deleteInWishlist())(req, res, next);
    }

    static async deleteUserWishList(req: Request, res: Response, next: NextFunction): Promise<void> {
        sendJsonPromise(WishlistService.delete())(req, res, next);
    }

}
