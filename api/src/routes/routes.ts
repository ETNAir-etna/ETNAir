import { Router } from "express";
import UserRouter from "./user.routes";
import AuthRouter from "./auth.routes";
import HomeRouter from "./home.routes";
import PropertyRouter from "./property.routes";
import ProtectedRouter from "./protected/protected.routes";

import { verifyToken } from "../middleware/auth.middleware";


const router: Router = Router();

router.use('/auth', AuthRouter);

router.use('/authenticated', verifyToken, ProtectedRouter)

router.use('/property', PropertyRouter);

router.use("/user", UserRouter);

router.use('/', HomeRouter);

export default router;