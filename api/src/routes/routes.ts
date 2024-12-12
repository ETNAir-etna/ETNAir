
import { Router } from "express";
import UserRouter from "./user.routes";
import AuthRouter from "./auth.routes";
import HomeRouter from "./home.routes";
import PropertyRouter from "./property.routes";

const router: Router = Router();

router.use("/user", UserRouter);

router.use('/auth', AuthRouter);

router.use('/property', PropertyRouter);

router.use('/', HomeRouter);



export default router;