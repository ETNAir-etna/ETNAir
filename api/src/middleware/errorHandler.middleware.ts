import {ErrorRequestHandler } from 'express';
import { errorLogger } from "../configs/logger";
import { Result } from '../interfaces/result';


export const errorHandler: ErrorRequestHandler = (err , req, res, next) => {

    errorLogger.error(err);
    // console.error(`[ERROR]: ${err.message || "Unknown error"}`, err);

    // SYSTEM : errorHandler
    let statusCode = 500;
    let errorMessage = "Internal Server Error";
    let redirect;
    let url;

    // PRISMA : errorHandler
    if (err.code === "P2025") {
        statusCode = 404;
        errorMessage = `Resource not found: ${err.meta?.target || "Unknown target"}`;
    } else if (err.code === "P2002") {
        statusCode = 409;
        errorMessage = `${err.meta?.target || "Unknown target"} already exists in the database.`;
    }  else if (err.code === "P2003") {
        statusCode = 409;
        errorMessage = ` Cannot delete ${err.meta?.target || "Unknown target"} because it is referenced elsewhere.`;
    }

    // BCRYPT : errorHandler
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


    // if (err.name === "JsonWebTokenError") {
    //     statusCode = 401;
    //     errorMessage = "Invalid or missing token.";
    // }

    const errorResult: Result = {
        action: "Error",
        success: false,
        url: redirect ? url : undefined,
        redirect: redirect || false,
        error: {
            status: statusCode,
            message: errorMessage.trim()
        }
    }

    res.status(statusCode).json(errorResult);
    

};
