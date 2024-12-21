import { Result } from "../../interfaces/result";
import { DashboardReviewModel } from "../../models/dashboard/Dashboard.Review.model";

export class DashboardReviewService {

    static async create(): Promise<Result> {
        await DashboardReviewModel.create();
        return { action: "?", success: true };
    }

    static async delete(): Promise<Result> {
        await DashboardReviewModel.delete();
        return { action: "?", success: true };
    }

    static async update(): Promise<Result> {
        await DashboardReviewModel.update();
        return { action: "?", success: true };
    }

}