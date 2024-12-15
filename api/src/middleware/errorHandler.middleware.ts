import {ErrorRequestHandler } from 'express';
import { isHttpError } from 'http-errors';
import { errorLogger } from "../configs/logger";


export const errorHandler: ErrorRequestHandler = (err , req, res, next) => {

    errorLogger.error(err.stack);

    res.status(err.status || 500).json({
        status :err.status || 500,
        success: false,
        message: "An unexpected error occurred. Please try again later."
    });
    

};
