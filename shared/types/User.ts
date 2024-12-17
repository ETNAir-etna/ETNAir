import { User as PrismaUser, Gender, Role } from '@prisma/client';

export type User = {                    
    id: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    gender?: Gender | null;
    phoneNumber?: string | null;
    role: Role;
    status: string[];
    createdAt: Date;
    updatedAt: Date;
    guestRating?: number | null;
    hostRating?: number | null;
    summary?: string | null;
    profileImg?: string | null;
    requestForDelete?: boolean;
    isSuperHost?: boolean;
};

export const UserDTO = (user: PrismaUser): User => {
    return {
        id: user.id,
        email: user.email,
        firstName: user.firstName ?? null,
        lastName: user.lastName ?? null,
        gender: user.gender ?? null,
        phoneNumber: user.phoneNumber ?? null,
        role: user.role,
        status: user.status,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
        guestRating: user.guestRating ?? null,
        hostRating: user.hostRating ?? null,
        summary: user.summary ?? null,
        profileImg: user.profileImg ?? null,
        requestForDelete: user.requestForDelete ?? false,
        isSuperHost: user.isSuperHost ?? false
    };
};
