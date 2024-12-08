import {NextFunction, Request, Response } from 'express';

import { sendJsonPromise } from '../helpers/sendJsonPromise.helper';
import { PropertyService } from '../services/property.service';

export class PropertyController {

    static async getAllProperties(req: Request, res: Response, next : NextFunction):Promise<void> {
        sendJsonPromise(PropertyService.getProperties(), 'No Property found')(req, res, next);
    }

    static async getPropertyById(req: Request, res: Response, next : NextFunction): Promise<void> {
        const { id } = req.params
        sendJsonPromise(PropertyService.getPropertyById(id), "This property isn't in the database")(req, res, next);
    }

    // static async createProperty(req: Request, res: Response, next : NextFunction): Promise<void> {
    //     const { data } = req.body
    //     sendJsonPromise(PropertyService.createProperty(data), "Couldn't create Property, try again.")(req, res, next)
    // }
}