import { Result } from "../interfaces/result";
import { ReservationModel } from "../models/reservation.model";

export class ReservationService {

    static async cancel(): Promise<Result> {
        await ReservationModel.cancel();
        return { action: "?", success: true };
    }
    static async create(): Promise<Result> {
            await ReservationModel.create();
            return { action: "?", success: true };
    }
    
    static async update(): Promise<Result> {
        await ReservationModel.update();
        return { action: "?", success: true };
    }
}