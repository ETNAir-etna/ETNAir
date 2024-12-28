import { Wishlist as PrismaWishlist } from "@prisma/client";
import { Wishlist } from "../types/Wishlist";


export const WishlistDTO = (wishlist: PrismaWishlist): Wishlist => {
    return {
        id: wishlist.id,
        name: wishlist.name,
        userId: wishlist.userId,
        createdAt: wishlist.createdAt,
        updatedAt: wishlist.updatedAt
    };
};
