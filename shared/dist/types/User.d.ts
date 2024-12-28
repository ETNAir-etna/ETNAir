import { Gender, Role } from "@prisma/client";
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
