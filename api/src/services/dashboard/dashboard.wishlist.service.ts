import { Result } from "../../interfaces/result";
import { DashboardWishlistModel } from "../../models/dashboard/Dashboard.Wishlist.model";

export class DashboardWishlistService {

    static async update(): Promise<Result> {
        await DashboardWishlistModel.update();
        return { action: "?", success: true };
    }

    static async create(): Promise<Result> {
        await DashboardWishlistModel.create();
        return { action: "?", success: true };
    }

    static async deleteElement(): Promise<Result> {
        await DashboardWishlistModel.deleteElement();
        return { action: "?", success: true };
    }

    static async deleteWishlist(): Promise<Result> {
        await DashboardWishlistModel.deleteWishlist();
        return { action: "?", success: true };
    }

}