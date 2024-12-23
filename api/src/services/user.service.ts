// // services/user.service.ts
import { Prisma } from "@prisma/client";
import { User } from "../../../shared/types/User";
import { Result } from "../interfaces/result";
import { UserModel } from "../models/User.model";

export class UserService {
  static async getUsers(): Promise<Result> {
    const data: User[] = await UserModel.findAll();
    return { action: "data", data: data, success: true };
  }

  static async getUserById(id: string): Promise<Result> {
    const data: User | null = await UserModel.findById(id);
    return { action: "data", data: data, success: true };
  }

  static async updateUser(id: string, data: Prisma.UserCreateInput): Promise<Result> {
    await UserModel.update(id, data);
    return { action: "data", success: true };
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
