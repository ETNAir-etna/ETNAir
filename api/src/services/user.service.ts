// // services/user.service.ts
import { Prisma } from '@prisma/client';
import { User } from '../../../shared/types/User';
import { Result } from '../interfaces/result';
import { UserModel } from '../models/UserModel';

export class UserService {

    static async getUsers(): Promise<Result> {
        const data: User[] = await UserModel.findAll();
        return { action: "data", data: data, success : true};
    };

    static async getUserById(id: string): Promise<Result> {
        const data: User | null = await UserModel.findById(id);
        return { action: "data", data: data, success : true};
    };

    static async updateUser(data: Prisma.UserCreateInput): Promise<Result> {
        await UserModel.updateUser(data);
        return { action: "data", success : true};
    };

    static async deleteUser(id: string): Promise<Result> {
        await UserModel.deleteUser(id);
        return { action: "data", success : true};
    };
};