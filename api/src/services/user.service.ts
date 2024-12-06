// services/user.service.ts
import { UserModel } from '../models/UserModel';
import { User } from '../../../shared/interfaces/User';

export class UserService {

    static async getUsers(): Promise<User[] | null> {
        return UserModel.findAll();
    }

    static getUserById(id: string): Promise<User | null> {
        return UserModel.findById(id);
    }

    // static async updateUser(id: string, data: Partial<User>): Promise<User> {
    //     return UserModel.update(id, data);
    // }

    // static async deleteUser(id: string): Promise<void> {
    //     await UserModel.delete(id);
    // }
}