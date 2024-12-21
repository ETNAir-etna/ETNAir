import { NextFunction, Request, Response  } from "express";
import { sendJsonPromise } from "../../helpers/sendJsonPromise.helper";
import { DashboardProfileService } from "../../services/dashboard/dashboard.profile.service";

export class DashboardProfileController {


    static async getProfile(req: Request, res: Response, next: NextFunction): Promise<void> {
        sendJsonPromise(DashboardProfileService.getProfile())(req, res, next);
    }

    static async updateProfile(req: Request, res: Response, next: NextFunction): Promise<void> {
        sendJsonPromise(DashboardProfileService.updateProfile())(req, res, next);
    }

    static async deleteProfile(req: Request, res: Response, next: NextFunction): Promise<void> {
        sendJsonPromise(DashboardProfileService.deleteProfile())(req, res, next);
    }

}