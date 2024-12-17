import { NextFunction, Request, Response } from 'express';
import { UserService } from '../services/user.service';
import { sendJsonPromise } from '../helpers/sendJsonPromise.helper';
import { AuthService } from '../services/auth/auth.service';
import jwt from 'jsonwebtoken';

export class UserController {

    static async getUsers(req: Request, res: Response, next: NextFunction): Promise<void> {
        sendJsonPromise(await UserService.getUsers(), "No user found" )(req, res, next);
    }

    static async getUser(req: Request, res: Response, next: NextFunction): Promise<void> {
        const { id } = req.params;
        sendJsonPromise(await UserService.getUserById(id), "User not in the database" )(req, res, next);
    }

    static async registerUser(req: Request, res: Response, next: NextFunction): Promise<void> {
        // TODO : : Find a message to send
        const { email, password } = req.body
        sendJsonPromise(await AuthService.registerUser(email, password), "MESSAGE to find REGISTER")(req, res, next);
    }

    static async loginUser(req: Request, res: Response, next: NextFunction): Promise<void> {
        // TODO : Find a way to custom a message send to the front
        const { email, password } = req.body;
        sendJsonPromise(await AuthService.loginUser(email, password), "MESSAGE to find LOGIN")(req, res, next);
    }

    static async logoutUser(req: Request, res: Response, next: NextFunction): Promise<void> {
        // TODO : FINISH the logout routes
        sendJsonPromise(await AuthService.logoutUser(), "MESSAGE to find LOGOUT")(req, res, next);
    }

    static getProfile(req: Request, res: Response):void {
        res.send(`Welcome `);
    }


}