import {ErrorRequestHandler } from 'express';
import { isHttpError } from 'http-errors';
import { errorLogger } from "../configs/logger";


export const errorHandler: ErrorRequestHandler = (err , req, res, next) => {

    errorLogger.error(err);
    let statusCode = 500;
    let errorMessage = "Internal Server Error";
    
    if (err.name === "TokenExpiredError") {
        statusCode = 401;
        errorMessage = "JWT expired. Please log in again.";
    } 
    
    if (err.name === "JsonWebTokenError") {
        statusCode = 401;
        errorMessage = "Invalid JWT. Please log in again.";
    } 
    
    if (err.name === "NotBeforeError") {
        statusCode = 401;
        errorMessage = "Token is not yet valid. Please check your system time.";
    }
    
    if (err.code === "P2002") {
        statusCode = 409;
        if (err.meta.target[0] === "email") {
            errorMessage = "User already in the database";
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
