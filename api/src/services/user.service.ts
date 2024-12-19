// // services/user.service.ts
import { User } from '../../../shared/types/User';
import { Result } from '../interfaces/result';
// import { User } from '@prisma/client';
import { UserModel } from '../models/UserModel';


// // import { User } from '@prisma/client';
export class UserService {

    static async getUsers(): Promise<Result> {
        const data: User[] = await UserModel.findAll();
        return { action: "data", data: data, success : true};
    }

    static async getUserById(id: string): Promise<Result> {
        const data: User | null = await UserModel.findById(id);
        return { action: "data", data: data, success : true};
    }

}