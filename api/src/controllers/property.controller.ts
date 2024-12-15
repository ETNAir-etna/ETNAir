import {NextFunction, Request, Response } from 'express';

import { sendJsonPromise } from '../helpers/sendJsonPromise.helper';
import { PropertyService } from '../services/property.service';
import { Prisma } from '@prisma/client';
import { Property } from '../../../shared/types/Property';

export class PropertyController {

    static async getAllProperties(req: Request, res: Response, next : NextFunction) {
        sendJsonPromise(await PropertyService.getProperties())(req, res, next);
    }

    static async getPropertyById(req: Request, res: Response, next : NextFunction) {
        const { id } = req.params
        sendJsonPromise(await PropertyService.getPropertyById(id))(req, res, next);
    }

    static async createProperty(req: Request, res: Response, next : NextFunction) {
        const data: Prisma.PropertyCreateInput = req.body
        sendJsonPromise(await PropertyService.createProperty(data))(req, res, next)
    }
}   