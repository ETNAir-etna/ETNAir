import { Request, Response, NextFunction } from 'express';
import { Result } from '../interfaces/result';
var createError = require('http-errors');

export const  sendJsonPromise  = (promise: Promise<Result>, notFoundMessage: string)  =>

    async (req: Request, res: Response, next : NextFunction ) => {
        
        try {
            
            const result = await promise;

            if (!result.success) {
                return res.status(result.status || 400).json(result)
            }

            if (result.action === "create") {
        
                if (result.redirect && result.url) {
                    return res.redirect(302, result.url)
                }

                return res.status(201).json(result)

            }
            // else if (result.action === "data") {
            //     if (JSON. stringify(result.data) === '{}' ) {
            //         return res.status(204).json(result);
            //     }
            //     return res.status(200).json(result);
            // }

            
            

            
            
        } catch (error) {
            next(error);
        }
    } 







































































    // if (!result) {
    //     return next(createError(404, notFoundMessage));
    // };

