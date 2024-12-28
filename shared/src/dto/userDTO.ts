import { User } from "../types/User";
import { User as PrismaUser } from "@prisma/client";


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
        isSuperHost: user.isSuperHost ?? false,
    };
};
