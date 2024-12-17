import {NextFunction, Request, Response } from 'express';

import { sendJsonPromise } from '../helpers/sendJsonPromise.helper';
import { PropertyService } from '../services/property.service';
import { Prisma } from '@prisma/client';
import { Property } from '../../../shared/types/Property';

export class PropertyController {

    static async getAllProperties(req: Request, res: Response, next : NextFunction): Promise<void> {
        sendJsonPromise(PropertyService.getProperties())(req, res, next);
    };

    static async getPropertyById(req: Request, res: Response, next : NextFunction): Promise<void> {
        const { id } = req.params
        sendJsonPromise(PropertyService.getPropertyById(id))(req, res, next);
    };

    static async createProperty(req: Request, res: Response, next : NextFunction): Promise<void> {
        const data: Prisma.PropertyCreateInput = req.body
        sendJsonPromise(PropertyService.createProperty(data))(req, res, next)
    };

    static async updateProperty(req: Request, res: Response, next : NextFunction): Promise<void> {
        const data: Prisma.PropertyCreateInput = req.body
        sendJsonPromise(PropertyService.updateProperty(data))(req, res, next)
    };

    static async deleteProperty(req: Request, res: Response, next : NextFunction): Promise<void> {
        const { id } = req.body
        sendJsonPromise(PropertyService.deleteProperty(id))(req, res, next)
    };

    static async deleteAllProperties(req: Request, res: Response, next : NextFunction): Promise<void> {
        const { ownerId } = req.body
        sendJsonPromise(PropertyService.deleteAllProperties(ownerId))(req, res, next)
    };
}   