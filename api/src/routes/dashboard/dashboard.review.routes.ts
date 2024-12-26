import { Router } from 'express';
import { ReviewController } from '../../controllers/review.controller';

const router = Router();


router.post('/:token/type/:type/:receiverId', ReviewController.createReview);

router.delete('/:token/type/:type/:receiverId', ReviewController.deleteReview);

router.put('/:token/type/:type/:receiverId', ReviewController.updateReview);

export default router