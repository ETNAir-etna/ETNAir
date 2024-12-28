import { Review as PrismaReview } from "@prisma/client";
import { Review } from "../types/Review";
export declare const ReviewDTO: (review: PrismaReview) => Review;
