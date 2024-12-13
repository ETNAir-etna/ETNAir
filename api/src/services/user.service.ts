// // services/user.service.ts
import { User } from "../../../shared/types/User";
import { Result } from "../interfaces/result";
// import { User } from '@prisma/client';
import { UserModel } from "../models/UserModel";

// // import { User } from '@prisma/client';
export class UserService {
  static async getUsers(): Promise<Result> {
    const data: User[] = await UserModel.findAll();
    return { action: "data", data: data, success: true };
  }

  static async getUserById(id: string): Promise<Result> {
    const data: User | null = await UserModel.findById(id);
    return { action: "data", data: data, success: true };
  }

  static async updateUser(id: string, data: Partial<User>): Promise<Result> {
    const user = await UserModel.findById(id);

    if (!user) {
      return { action: "update", success: false };
    }

    const updateResult = await UserModel.update(id, data);

    if (updateResult) {
      return { action: "update", success: true };
    }
    return { action: "update", success: false };
  }

  static async deleteUser(id: string): Promise<Result> {
    try {
      await UserModel.delete(id);
      return { action: "redirect", success: true, url: "#" };
    } catch (error) {
      console.error("Error deleting user:", error);
      return { action: "none", success: false, url: "" };
    }
  }
}
