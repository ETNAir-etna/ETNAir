import { Router } from "express";
import UserRouter from "./user.routes";
import AuthRouter from "./auth.routes";
import HomeRouter from "./home.routes";
import DashboardProfileRouter from "./dashboard/dashboard.profile.routes";
import DashboardPropertyRouter from "./dashboard/dashboard.property.routes";
import DashboardReservationRouter from "./dashboard/dashboard.reservation.routes";
import DashboardReviewRouter from "./dashboard/dashboard.review.routes";
import DashboardWishlistRouter from "./dashboard/dashboard.wishlist.routes";
import PropertyRouter from "./property.routes";
import { verifyToken } from "../middleware/auth.middleware";

const router: Router = Router();

router.use('/auth', AuthRouter);

router.use('/dashboard/profile', verifyToken, DashboardProfileRouter);

router.use('/dashboard/property', verifyToken, DashboardPropertyRouter);

router.use('/dashboard/reservation', verifyToken, DashboardReservationRouter);

router.use('/dashboard/review', verifyToken, DashboardReviewRouter);

router.use('/dashboard/wishlist', verifyToken, DashboardWishlistRouter);

router.use('/property', PropertyRouter);

router.use("/user", UserRouter);

router.use('/', HomeRouter);

export default router;