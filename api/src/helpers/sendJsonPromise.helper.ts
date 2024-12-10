import { Request, Response, NextFunction } from 'express';
var createError = require('http-errors')

export const  sendJsonPromise  = <T>(promise: Promise<T>, notFoundMessage: string)  =>

    async (req: Request, res: Response, next : NextFunction ) => {
        try {
            const result = await promise;
            if (!result) {
                throw createError(404, notFoundMessage)
            } 

            return res.status(200).json(result);
            
        } catch (error) {
            next(error)
        }
    }



