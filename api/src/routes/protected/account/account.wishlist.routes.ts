import { Router } from 'express';
import { WishlistController } from '../../../controllers/wishlist.controller';

const AccountWishlistRouter = Router();


AccountWishlistRouter.put('/:token', WishlistController.addToUserWishlist);

AccountWishlistRouter.post('/:token', WishlistController.createWishlist);

AccountWishlistRouter.delete('/:token/:wishlistId/:propertyId', WishlistController.deleteFromUserWishlist);

AccountWishlistRouter.delete('/:token/:wishlistId', WishlistController.deleteUserWishList);

export default AccountWishlistRouter