import { reviewTypes } from "@prisma/client";

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
};
