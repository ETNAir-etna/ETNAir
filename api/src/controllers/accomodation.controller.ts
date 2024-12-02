import {Request, Response } from 'express';
import { AccommodationModel } from '../models/AccomodationModel';
export class AccommodationController {

    static getAllAccommodations(req: Request, res: Response):void {
        res.send("Welcome on ETNAir | Accommodation page");
    }

    static getAccommodationById(req: Request, res: Response):void {
        res.send("Welcome on ETNAir | Accommodation page");
    }

    static createAccommodation(req: Request, res: Response):void {
        res.send("Welcome on ETNAir | Accommodation page");
    }
}