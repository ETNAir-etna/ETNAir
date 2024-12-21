import { NextFunction, Request, Response } from "express";
import { sendJsonPromise } from "../../helpers/sendJsonPromise.helper";
import { DashboardPropertyService } from "../../services/dashboard/dashboard.property.service";

export class DashboardPropertyController {

    static async createProperty(req: Request, res: Response, next: NextFunction): Promise<void> {
        sendJsonPromise(DashboardPropertyService.create())(req, res, next);
    }

    static async deleteUserProperty(req: Request, res: Response, next: NextFunction): Promise<void> {
        sendJsonPromise(DashboardPropertyService.delete())(req, res, next);
    }

    static async getAllUserProperty(req: Request, res: Response, next: NextFunction): Promise<void> {
        sendJsonPromise(DashboardPropertyService.deleteAll())(req, res, next);
    }

    static async updateProperty(req: Request, res: Response, next: NextFunction): Promise<void> {
        sendJsonPromise(DashboardPropertyService.update())(req, res, next);
    }

}
