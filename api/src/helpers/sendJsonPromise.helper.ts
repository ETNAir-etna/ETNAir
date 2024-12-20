import { Request, Response, NextFunction } from 'express';
import { Result } from '../interfaces/result';
import { UserModel } from '../models/UserModel';
var createError = require('http-errors');

export const  sendJsonPromise  = (promise: Promise<Result>, notFoundMessage?: string)  =>

    async (req: Request, res: Response, next : NextFunction ) => {
        
        try {
            
            const result = await promise;

            if (!result) {
                return next(createError(404, notFoundMessage));
            }
            
            if (result.key === true) {
                res.cookie('jwt', result.token, {
                    httpOnly: true,
                    secure: process.env.NODE_ENV === 'production',
                    sameSite: 'strict',
                });
            };
            
            if (result.key === false) {
                res.clearCookie("jwt",
                    { httpOnly: true,
                    secure: true });
            };

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


// export const sendJsonPromise = (promise: Result, notFoundMessage: string) =>

//     async (req: Request, res: Response, next: NextFunction) => {


//         try {
            
//             const result = promise;
            
            

//             if (result.action === "redirect" && result.url) {
//                 return res.redirect(result.url);
//             } else if (result.action === "data") {
//                 if (JSON.stringify(result.data) === '{}') {
//                     return res.status(204).json(result);
//                 }
//                 return res.status(200).json(result);
//             }
            
//         } catch (error) {
//             return (next(error));
//         }
// }







































































    // if (!result) {
    //     return next(createError(404, notFoundMessage));
    // };

