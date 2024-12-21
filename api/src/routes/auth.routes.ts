import { Router } from "express";
import {
  registerValidation,
  loginValidation,
} from "../validators/auth.validator";
import { checkValidators } from "../middleware/checkValidators.middleware";
import { AuthController } from "../controllers/auth.controller";
import { verifyToken } from "../middleware/auth.middleware";

const router = Router();

router.post('/register', registerValidation, checkValidators, AuthController.registerUser);

router.post("/login",loginValidation, checkValidators, AuthController.loginUser);

router.post("/logout", AuthController.logoutUser);

export default router;
