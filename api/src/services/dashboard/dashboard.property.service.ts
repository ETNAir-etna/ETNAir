import { Result } from "../../interfaces/result";
import { DashboardPropertyModel } from "../../models/dashboard/Dashboard.Property.model";

export class DashboardPropertyService {

    static async create(): Promise<Result> {
        await DashboardPropertyModel.create();
        return { action: "?", success: true };
    }

    static async delete(): Promise<Result> {
        await DashboardPropertyModel.delete();
        return { action: "?", success: true };
    }

    static async deleteAll(): Promise<Result> {
        await DashboardPropertyModel.deleteAll();
        return { action: "?", success: true };
    }

    static async update(): Promise<Result> {
        await DashboardPropertyModel.update();
        return { action: "?", success: true };
    }
    
}