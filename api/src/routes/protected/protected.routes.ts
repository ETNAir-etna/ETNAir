import { Router } from "express";
import AccountProfileRouter from "./account/account.profile.routes";
import AccountPropertyRouter from "./account/account.property.routes";
import AccountReservationRouter from "./account/account.reservation.routes";
import AccountReviewRouter from "./account/account.review.routes";
import AccountWishlistRouter from "./account/account.wishlist.routes";
import PropertyRouter from "./admin/admin.property.routes";
import UserRouter from "./admin/admin.user.routes";


const protectedRouter: Router = Router();

// ACCOUNT
protectedRouter.use('/account/profile', AccountProfileRouter);
protectedRouter.use('/account/property', AccountPropertyRouter);
protectedRouter.use('/account/reservation', AccountReservationRouter);
protectedRouter.use('/account/review', AccountReviewRouter);
protectedRouter.use('/account/wishlist', AccountWishlistRouter);

//  ADMIN
protectedRouter.use('/admin/property', PropertyRouter);
protectedRouter.use('/admin/user', UserRouter);

export default protectedRouter;