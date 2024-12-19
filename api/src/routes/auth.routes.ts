import { Router } from "express";
import { UserController } from "../controllers/user.controller";
import { registerValidators } from "../validators/auth.validator";
import { checkValidators } from "../middleware/checkValidators.middleware";
import { verifyToken } from "../middleware/auth.middleware";


const router = Router() ;

router.post('/register', registerValidators, checkValidators, UserController.registerUser);

router.post('/login', UserController.loginUser);

router.post('/logout', UserController.logoutUser);

export default router;