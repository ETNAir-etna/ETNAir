import { Router } from "express";
import { registerValidators } from "../validators/auth.validator";
import { checkValidators } from "../middleware/checkValidators.middleware";
import { AuthController } from "../controllers/auth.controller";

const router = Router() ;

router.post('/register', registerValidators, checkValidators, AuthController.registerUser);

router.post('/login', AuthController.loginUser);

router.post('/logout', AuthController.logoutUser)

export default router; 