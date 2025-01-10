import { Request, Response, NextFunction } from 'express';
import createError from 'http-errors';

export const checkRole = (roles: string[]) => {
    return (req: Request, res: Response, next: NextFunction) => {
        const userRole: string = res.locals.user.role;

        if (!userRole || !roles.includes(userRole)) {
            const error = createError(403, "Access denied");
            error.errorType = "ROLE_AUTHORIZATION";
            return next(error)
        }
        next();
    }
}