import { body } from "express-validator/lib/middlewares/validation-chain-builders";

export const registerValidators = [
    body('email').isEmail(),
    body('password').isLength({ min: 5 })
];