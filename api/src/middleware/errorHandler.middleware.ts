import {ErrorRequestHandler } from 'express';
import { isHttpError } from 'http-errors';
import { errorLogger } from "../configs/logger";


export const errorHandler: ErrorRequestHandler = (err , req, res, next) => {

    errorLogger.error(err);

    let statusCode = 500;
    let errorMessage = "Internal Server Error"

    if (err.code === "P2002") {
        statusCode = 409;
        if (err.meta.target[0] === "email") {
            errorMessage = "User already in the database"
        }
    }


    if (isHttpError(err)) {
        statusCode = err.status;
        errorMessage = err.message;
    }
    res.status(statusCode).json({
        error: {
            status :statusCode,
            message:errorMessage.trim()
        }
    });

};
