import { Router } from 'express';
import { DashboardReviewController } from '../../controllers/dashboard/dashboard.review.controller';

const router = Router();


router.post('/:token/type/:type/:receiverId', DashboardReviewController.createReview);

router.delete('/:token/type/:type/:receiverId', DashboardReviewController.deleteReview);

router.put('/:token/type/:type/:receiverId', DashboardReviewController.updateReview);

export default router