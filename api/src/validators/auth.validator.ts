import { body } from "express-validator/lib/middlewares/validation-chain-builders";

export const registerValidators = [
    // TODO : Add error custom message --> body('email', 'Invalid does not Empty').not().isEmpty(),
    body('email').isEmail(),
    body('password').isLength({ min: 5 })
];