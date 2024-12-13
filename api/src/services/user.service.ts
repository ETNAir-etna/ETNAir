// // services/user.service.ts
//import { User } from '../../../shared/types/User';
import { User } from "@prisma/client";
import { UserModel } from "../models/UserModel";

// // import { User } from '@prisma/client';
export class UserService {
  static async getUsers(): Promise<User[] | null> {
    return UserModel.findAll();
  }

  static getUserById(id: string): Promise<User | null> {
    return UserModel.findById(id);
  }

  static async updateUser(
    id: string,
    data: Partial<User>
  ): Promise<User | null> {
    const user = await UserModel.findById(id);
    if (user) {
      return UserModel.update(id, data);
    }
    return null;
  }

  static async deleteUser(id: string): Promise<boolean> {
    try {
      await User.delete({
        where: { id },
      });
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }
}
