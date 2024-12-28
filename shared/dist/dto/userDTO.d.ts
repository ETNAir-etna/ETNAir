import { User } from "../types/User";
import { User as PrismaUser } from "@prisma/client";
export declare const UserDTO: (user: PrismaUser) => User;
