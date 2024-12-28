import { Review as PrismaReview } from "@prisma/client";
import { Review } from "../types/Review";


export const ReviewDTO = (review: PrismaReview): Review => {
    return {
        id: review.id,
        createdBy: review.createdBy ?? null,
        fullName: review.fullName,
        profileImg: review.profileImg,
        reviewType: review.reviewType,
        reservationId: review.reservationId ?? null,
        propertyId: review.propertyId ?? null,
        content: review.content,
        rating: review.rating,
        publishedAt: review.publishedAt,
        updatedAt: review.updatedAt,
        directedTo: review.directedTo ?? null,
    };
};
