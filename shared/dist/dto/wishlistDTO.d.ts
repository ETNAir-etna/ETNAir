import { Wishlist as PrismaWishlist } from "@prisma/client";
import { Wishlist } from "../types/Wishlist";
export declare const WishlistDTO: (wishlist: PrismaWishlist) => Wishlist;
