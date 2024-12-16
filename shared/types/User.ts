import { User as PrismaUser } from "@prisma/client";

export type User = {
  id: string;
  email: string;
  password: string;
  firstName?: string | null;
  lasrName?: string | null;
  gender?: string | null;
  phoneNumber?: string | null;
  role: string;
  status: string[];
  createdAt: Date;
  updatedAt: Date;
  guestRating?: number | null;
  hostRating?: number | null;
  summary?: string | null;
  profileImg?: string | null;
  requestForDelete: boolean;
  isSuperHost: boolean;
};

export const DTOUser = (User: PrismaUser): User => {
  return {
    id: User.id,
    email: User.email,
    firstName: User.firstName ?? null,
    lasrName: User.lasrName ?? null,
    gender: User.gender ?? null,
    phoneNumber: User.phoneNumber ?? null,
    role: User.role,
    status: User.status[], 
    createdAt: User.createdAt,
    updatedAt: User.updatedAt,
    guestRating: User.guestRating ?? null,
    hostRating: User.hostRating ?? null,
    summary: User.summary ?? null,
    profileImg: User.profileImg ?? null,
    requestForDelete: User.requestForDelete,
    isSuperHost: User.isSuperHost,
  };
};
