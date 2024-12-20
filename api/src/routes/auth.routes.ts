import { Router } from "express";
import {
  registerValidation,
  loginValidation,
} from "../validators/auth.validator";
import { checkValidators } from "../middleware/checkValidators.middleware";
import { AuthController } from "../controllers/auth.controller";
import { verifyToken } from "../middleware/auth.middleware";

const router = Router();

/**
 * @swagger
 * /auth/register:
 *   post:
 *     summary: Register a new user
 *     description: Creates a new user with email and password.
 *     tags:
 *       - Auth
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UserRequest'
 *     responses:
 *       201:
 *         description: User successfully registered.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UserResponse'
 *       400:
 *         description: Validation error (e.g., invalid email format).
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ValidationErrorApiResponse'
 *       409:
 *         description: Prisma error (e.g., email already exists).
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/PrismaErrorApiResponse'
 */
<<<<<<< HEAD
router.post('/register', registerValidation, checkValidators, AuthController.registerUser);
=======
router.post(
  "/register",
  registerValidation,
  checkValidators,
  AuthController.registerUser
);
>>>>>>> 723295e17a2e8f2c7a97e19a54ffab2e53ff3332

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Login a user
 *     description: Authenticates a user with email and password.
 *     tags:
 *       - Auth
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UserRequest'
 *     responses:
 *       200:
 *         description: User successfully logged in.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UserResponse'
 *       401:
 *         description: Unauthorized.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorApiResponse'
 */
router.post(
  "/login",
  loginValidation,
  checkValidators,
  AuthController.loginUser
);

router.post("/logout", AuthController.logoutUser);

export default router;
