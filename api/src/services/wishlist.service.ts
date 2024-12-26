import { Result } from "../interfaces/result";
import { WishlistModel } from "../models/wishlist.model";

export class WishlistService {

    static async add(): Promise<Result> {
        await WishlistModel.add();
        return { action: "?", success: true };
    }
    static async create(): Promise<Result> {
            await WishlistModel.create();
            return { action: "?", success: true };
        }
    
    static async deleteInWishlist(): Promise<Result> {
        await WishlistModel.deleteInWishlist();
        return { action: "?", success: true };
    }

    static async delete(): Promise<Result> {
        await WishlistModel.delete();
        return { action: "?", success: true };
    }
    
}