import { reviewTypes } from "@prisma/client";
import { Review as PrismaReview } from '@prisma/client';

export type Review = {                    
    id: string;
    createdBy?: string | null;
    fullName: string;
    profileImg: string;
    reviewType: reviewTypes;
    reservationId?: string | null;
    propertyId?: string | null;
    content: string;
    rating: number;
    publishedAt: Date;
    updatedAt: Date;
    directedTo?: string | null;
}

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
    }
}
