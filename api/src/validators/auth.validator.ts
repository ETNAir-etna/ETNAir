import { body } from "express-validator";


export const registerValidators = [
    body('email').isEmail(),
    body('password').isLength({ min: 5 })
];