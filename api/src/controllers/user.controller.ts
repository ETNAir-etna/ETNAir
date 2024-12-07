import { NextFunction, Request, Response } from 'express';
import { UserService } from '../services/user.service';
import { sendJsonPromise } from '../helpers/sendJsonPromise.helper';

export class UserController {

    static async getUsers(req: Request, res: Response, next: NextFunction): Promise<void> {
        sendJsonPromise(UserService.getUsers(), "No user found", )(req, res, next);
        
    }


    static async getUser(req: Request, res: Response, next: NextFunction): Promise<void> {
        const { id } = req.params;
        sendJsonPromise(UserService.getUserById(id), "User not in the database" )(req, res, next);
    }

    // static async createUser(req: Request, res: Response): Promise<void> {
    // try {
    // const user = await UserService.createUser(req.body);
    // res.status(201).json(user);
    // } catch (error) {
    // res.status(400).json({ error: error.message });
    // }
    // }
}