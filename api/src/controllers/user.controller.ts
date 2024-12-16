import { NextFunction, Request, Response } from 'express';
import { UserService } from '../services/user.service';
import { sendJsonPromise } from '../helpers/sendJsonPromise.helper';
import { AuthService } from '../services/auth/auth.service';

export class UserController {

    static async getUsers(req: Request, res: Response, next: NextFunction): Promise<void> {
        sendJsonPromise(UserService.getUsers(), "No user found" )(req, res, next);
    }

    static async getUser(req: Request, res: Response, next: NextFunction): Promise<void> {
        const { id } = req.params;
        sendJsonPromise(UserService.getUserById(id), "User not in the database" )(req, res, next);
    }

}