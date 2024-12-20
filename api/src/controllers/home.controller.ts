import {Request, Response } from 'express';
export class HomeController {

    static getHome(req: Request, res: Response):void {
        res.send("Welcome to ETNAir !");
    };
};