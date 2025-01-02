import {ErrorRequestHandler } from 'express';
import { errorLogger } from "../configs/logger";
import { Result } from '../interfaces/result';
import { Prisma } from '@prisma/client';
import { isHttpError } from 'http-errors';


export const errorHandler: ErrorRequestHandler = (err , req, res, next) => {

    errorLogger.error(err);
    //console.error(`[ERROR]: ${err.message || "Unknown error"}`, err);

    // SYSTEM : errorHandler
    let statusCode = 500;
    let errorMessage = "Internal Server Error";
    let errorType = "SERVER"
    let redirect;
    let url;
    let details;

    /* ERROR : PRISMA */
    if (err instanceof Prisma.PrismaClientKnownRequestError) {
            errorType = "PRISMA"
            if (err.code === "P2025") {
                statusCode = 404;
                errorMessage = `Resource not found: ${err.meta?.target || "Unknown target"}`;
            } else if (err.code === "P2002") {
                statusCode = 409;
                errorMessage = `${err.meta?.target || "Unknown target"} already exists in the database.`;
            } else if (err.code === "P2003") {
                statusCode = 409;
                errorMessage = `Cannot delete ${err.meta?.target || "Unknown target"} because it is referenced elsewhere.`;
            }
        } else if (err instanceof Prisma.PrismaClientValidationError) {
            errorType = "PRISMA"
            statusCode = 400;
            errorMessage = "Validation Error: Incorrect data type or missing required fields.";
        } else if (err instanceof Prisma.PrismaClientInitializationError) {
            errorType = "PRISMA"
            statusCode = 500;
            errorMessage = "Database initialization failed.";
        } else if (err instanceof Prisma.PrismaClientRustPanicError) {
            statusCode = 500;
            errorMessage = "An unexpected error occurred in Prisma.";
        }

    /* ERROR : BCRYPT */
    if (err.message.includes("salt") || err.message.includes("bcrypt")) {
        errorType = "BCRYPT"
        if (err.message.includes("data and salt arguments required")) {
            statusCode = 400;
            errorMessage = "Invalid arguments provided to bcrypt. Password or salt is missing.";
        } else if (err.message.includes("Invalid salt")) {
            statusCode = 400;
            errorMessage = "The salt provided to bcrypt is invalid.";
        } else if (err.message.includes("Invalid password")) {
            statusCode = 401;
            errorMessage = "The provided password is incorrect.";
        }
    }
    
    /* ERROR : jwt */
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

    /* ERROR : CORS */
    if (err.message === "Not allowed by CORS") {
        statusCode = 403;
        errorMessage = "CORS policy does not allow access from this origin";
    }
    
    
    if (isHttpError(err)) {
        statusCode = err.status;
        errorMessage = err.message;
    }
    
    const errorResult: Result = {
        action: "Error",
        success: false,
        url: redirect ? url : undefined,
        redirect: redirect || false,
        error: {
            errorType: err.errorType ?? errorType,
            status: statusCode,
            message: errorMessage.trim(),
            details: err.details,
        }
    }

    res.status(statusCode).json(errorResult);
    
};
