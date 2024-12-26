import { Result } from "../interfaces/result";
import { ReviewModel } from "../models/review.model";

export class ReviewService {
    static async create(): Promise<Result> {
            await ReviewModel.create();
            return { action: "?", success: true };
        }
    
        static async delete(): Promise<Result> {
            await ReviewModel.delete();
            return { action: "?", success: true };
        }
    
        static async update(): Promise<Result> {
            await ReviewModel.update();
            return { action: "?", success: true };
        }
}