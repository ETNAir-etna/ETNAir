import { body } from "express-validator/lib/middlewares/validation-chain-builders";

export const registerValidation = [

    body('email')
        .trim() 
        .isEmail().withMessage('Email is invalid.') 
        .notEmpty().withMessage('Email is required.')
        .normalizeEmail(),

    body('password')
        .trim()
        .notEmpty().withMessage('Password is required.')
        .custom((value) => {
            const errors: string[] = [];

            if (!/^.{5,40}$/.test(value)) { errors.push('5 characters min') };
    
            if (!/[A-Z]/.test(value)) { errors.push('1 uppercase letter') };
    
            if (!/[0-9]/.test(value)) { errors.push('1 number') };
    
            if (!/[^A-Za-z0-9]/.test(value)) { errors.push('1 special character') };
    
            if (errors.length > 0) {throw new Error(`Password must contain: ${errors.join(', ')}`) };
    
            return true;
        })
];

export const loginValidation = [
    body('email')
        .trim() 
        .notEmpty().withMessage('Email is required.')
        .normalizeEmail(),

    body('password')
        .trim()
        .notEmpty().withMessage('Password is required.')
];