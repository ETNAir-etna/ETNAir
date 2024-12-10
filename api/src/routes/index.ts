
import { Router } from "express";
import UserRouter from "./user.routes";
import AuthRouter from "./auth.routes";
import HomeRouter from "./home.routes";
import PropertyRouter from "./property.routes";

const router: Router = Router();

router.use("/user", UserRouter);

router.use('/auth', AuthRouter);

router.use('/etnair', HomeRouter);

router.use('/property', PropertyRouter);



export default router;