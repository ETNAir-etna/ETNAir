"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WishlistDTO = void 0;
const WishlistDTO = (wishlist) => {
    return {
        id: wishlist.id,
        name: wishlist.name,
        userId: wishlist.userId,
        createdAt: wishlist.createdAt,
        updatedAt: wishlist.updatedAt
    };
};
exports.WishlistDTO = WishlistDTO;
