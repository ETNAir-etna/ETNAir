import { Result } from "../../interfaces/result";
import { DashboardProfileModel } from "../../models/dashboard/Dashboard.Profile.model";

export class DashboardProfileService {

    static async getProfile(): Promise<Result> {
        await DashboardProfileModel.findAll();
        return { action: "?", success: true };
    }

    static async updateProfile(): Promise<Result> {
        await DashboardProfileModel.update();
        return { action: "?", success: true };
    }

    static async deleteProfile(): Promise<Result> {
        await DashboardProfileModel.delete();
        return { action: "?", success: true };
    }

}