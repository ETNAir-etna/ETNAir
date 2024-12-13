import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator/lib/validation-result';
var createError = require('http-errors');


export const checkValidators = (req: Request, res: Response, next: NextFunction) => {

    const ValidatorsErrors = validationResult(req);

    if (!ValidatorsErrors.isEmpty()) {
        return next(createError(400, "VALIDATOR INVALID"));
    };

    next();
};