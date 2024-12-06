import { Request, Response } from 'express';
import { UserService } from '../services/user.service';
import sendJsonPromise from '../helpers/sendJsonPromise.helper';

export class UserController {

    static async getUsers(req: Request, res: Response): Promise<void> {

        sendJsonPromise(req, res, UserService.getUsers(), 'No user found' );
    }


    static async getUser(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        sendJsonPromise(req, res, UserService.getUserById(id), 'User not in the database' );
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