import { Wishlist as PrismaWishlist } from '@prisma/client';

export type Wishlist = {                    
    id: string
    name: string
    userId: string
    createdAt: Date
    updatedAt: Date
}

export const WishlistDTO = (wishlist: PrismaWishlist): Wishlist => {
    return {
        id: wishlist.id,
        name: wishlist.name,
        userId: wishlist.userId,
        createdAt: wishlist.createdAt,
        updatedAt: wishlist.updatedAt
    }
}
