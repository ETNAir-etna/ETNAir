import {Request, Response } from 'express';
import { UserModel } from '../models/UserModel';
export class UserController {

    static getUser(req: Request, res: Response):void {
        res.send("Welcome to ETNAir | User page");
    }

    static addUser(req: Request, res: Response):void {
        res.send("Welcome to ETNAir | User page");
    }
}