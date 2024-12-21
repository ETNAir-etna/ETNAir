import { Router } from 'express';
import { DashboardWishlistController } from '../../controllers/dashboard/dashboard.wishlist.controller';

const router = Router();


router.put('/:token', DashboardWishlistController.addToUserWishlist);

router.post('/:token', DashboardWishlistController.createWishlist);

router.delete('/:token/:wishlistId/:propertyId', DashboardWishlistController.deleteFromUserWishlist);

router.delete('/:token/:wishlistId', DashboardWishlistController.deleteUserWishList);

export default router