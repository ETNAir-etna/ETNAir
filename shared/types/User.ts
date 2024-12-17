import { User as PrismaProperty } from '@prisma/client';

export type User = {

    id: string;
    email: string;
    password: string;
    firstName?: string | null;
    lastName?: string | null;
    gender?: string | null;
    phoneNumber?: string | null;
    role?: string;
    status: string[];
    createdAt: Date;
    updatedAt: Date;
    guestRating?: number | null;
    hostRating?: number | null;
    summary?: string | null;
    profileImg?: string | null;
    requestForDelete?: boolean;
    isSuperHost?: boolean;
        
}
