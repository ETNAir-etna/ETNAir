import { Prisma } from "@prisma/client";
import { Result } from "../../interfaces/result";
import { DashboardReservationModel } from "../../models/dashboard/Dashboard.Reservation.model";

export class DashboardReservationService {

    static async cancel(): Promise<Result> {

        await DashboardReservationModel.cancel();
        return { action: "?", success: true };
    }

    static async create(): Promise<Result> {
        await DashboardReservationModel.create();
        return { action: "?", success: true };
    }

    static async update(): Promise<Result> {
        await DashboardReservationModel.update();
        return { action: "?", success: true };
    }

}