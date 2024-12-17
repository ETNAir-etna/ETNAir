import { Request, Response, NextFunction } from 'express';
import { Result } from '../interfaces/result';

export const  sendJsonPromise  = (promise: Promise<Result>, notFoundMessage?: string)  =>

    async (req: Request, res: Response, next : NextFunction ) => {
        
        try {
            
            const result = await promise;

            if (result && result.success) {

                if (result.action === "delete") {
                    return res.status(200).json(result);
                }

                if (!result.data) {
                    return res.status(404).json(result);
                };

                if (result.action === "create") {
        
                    if (result.redirect && result.url) {
                        return res.redirect(302, result.url)
                    };
    
                    return res.status(201).json(result);
                };

                if (result.action === "login") {
            
                    if (result.redirect && result.url) {
                        return res.redirect(302, result.url)
                    };
                };

                return res.status(200).json(result)

            };
            
            
        } catch (error) {
            next(error);
        };
};







































































    // if (!result) {
    //     return next(createError(404, notFoundMessage));
    // };

