import { Router } from 'express';
import { WishlistController } from '../../controllers/wishlist.controller';

const router = Router();


router.put('/:token', WishlistController.addToUserWishlist);

router.post('/:token', WishlistController.createWishlist);

router.delete('/:token/:wishlistId/:propertyId', WishlistController.deleteFromUserWishlist);

router.delete('/:token/:wishlistId', WishlistController.deleteUserWishList);

export default router