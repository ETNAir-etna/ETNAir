
import { Router } from "express";
import UserRouter from "./user.routes";
import HomeRouter from "./home.routes";
import PropertyRouter from "./property.routes";

const router: Router = Router();

router.use("/user", UserRouter);

router.use('/etnair', HomeRouter);

router.use('/property', PropertyRouter);

export default router;