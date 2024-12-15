import { Request, Response, NextFunction } from 'express';
import { ValidationError } from 'express-validator';
import { Result, validationResult } from 'express-validator/lib/validation-result';


export const checkValidators = (req: Request, res: Response, next: NextFunction): void => {

    const validationErrors = validationResult(req);

    if (!validationErrors.isEmpty()) {
        res.status(400).json({
            status: 400,
            success: false,
            errors: validationErrors.array(),
        });
    } else {
        next();
    }

    
};
