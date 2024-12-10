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

    static async registerUser(req: Request, res: Response, next: NextFunction): Promise<void> {
        // ! TO DO : Find a message to send
        const { email, password } = req.body
        sendJsonPromise(AuthService.registerUser(email, password), "MESSAGE to find")(req, res, next);
    }

    static async loginUser(req: Request, res: Response, next: NextFunction): Promise<void> {
        // ! TO DO : Find a way to custom a message send to the front
        const { email, password } = req.body
        sendJsonPromise(AuthService.loginUser(email, password), "MESSAGE to find")(req, res, next);
    }

    static async logoutUser(req: Request, res: Response, next: NextFunction): Promise<void> {
        // ! TO DO : FINISH the logout routes
        sendJsonPromise(AuthService.logoutUser(), "MESSAGE to find")(req, res, next);
    }

}