import { Router } from 'express';
import { ReviewController } from '../../../controllers/review.controller';

const AccountReviewRouter = Router();


AccountReviewRouter.post('/:token/type/:type/:receiverId', ReviewController.createReview);

AccountReviewRouter.delete('/:token/type/:type/:receiverId', ReviewController.deleteReview);

AccountReviewRouter.put('/:token/type/:type/:receiverId', ReviewController.updateReview);

export default AccountReviewRouter