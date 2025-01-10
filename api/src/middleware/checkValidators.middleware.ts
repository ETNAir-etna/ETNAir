import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator/lib/validation-result';
import createError from 'http-errors';

export const checkValidators = (req: Request, res: Response, next: NextFunction): void => {

    const validationErrors = validationResult(req);

    if (!validationErrors.isEmpty()) {
        const errorDetails = validationErrors.array();
        const error = createError(400, "Invalid field(s)");
        error.errorType = "VALIDATION_ERROR(S)";
        error.details = errorDetails;
        return next(error);
    } 

    next();
};
