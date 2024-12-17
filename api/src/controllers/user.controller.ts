import { NextFunction, Request, Response } from 'express';
import { UserService } from '../services/user.service';
import { sendJsonPromise } from '../helpers/sendJsonPromise.helper';
import { Prisma } from '@prisma/client';

export class UserController {

    static async getUsers(req: Request, res: Response, next: NextFunction): Promise<void> {
        sendJsonPromise(UserService.getUsers())(req, res, next);
    };

    static async getUser(req: Request, res: Response, next: NextFunction): Promise<void> {
        const { id } = req.params;
        sendJsonPromise(UserService.getUserById(id))(req, res, next);
    };

    static async updateUser(req: Request, res: Response, next: NextFunction): Promise<void> {
        const data: Prisma.UserCreateInput = req.body;
        sendJsonPromise(UserService.updateUser(data))(req, res, next);
    };

    static async deleteUser(req: Request, res: Response, next: NextFunction): Promise<void> {
        const { id } = req.body;
        sendJsonPromise(UserService.deleteUser(id))(req, res, next);
    };

};