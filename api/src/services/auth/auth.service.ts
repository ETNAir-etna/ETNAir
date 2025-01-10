import { servicesLogger } from "../../configs/logger";
import jwt from "jsonwebtoken";
import { Result } from "../../interfaces/result";
import { UserModel } from "../../models/User.model";
import { comparePassword, hashPassword } from "../../utils/hashPassword.util";
import { PrismaClient } from "@prisma/client";
import { User, UserDTO } from "@etnair-etna/shared";

const prisma = new PrismaClient();

export class AuthService {

  static async registerUser(email: string, password: string): Promise<Result> {
    const hash = await hashPassword(password);
    const user = await UserModel.createUser(email, hash);
    let newUser: User = UserDTO(user)
    servicesLogger.silly(`Welcome ${user} !`);
    return {
      action: "create",
      data: newUser,
      success: true,
    };
  }

  static async loginUser(email: string, password: string): Promise<Result> {
    const user = await UserModel.findByEmail(email);
    
    if (!user) {
      throw Error("User Not found");
    }
    console.log(user)
    await comparePassword(password, user.password);

    const userData = await UserModel.findById(user.id);

    const newToken = jwt.sign({ id: user.id, email, role: user.role }, process.env.JWT_SECRET!, {
      expiresIn: process.env.JWT_EXPIRES_IN || "1h",
    });

    return {
      key: true,
      token: newToken,
      action: "log",
      data: userData,
      success: true,
    };
  }

  static async logoutUser(): Promise<Result> {
    return {
      key: false,
      action: "log",
      redirect: true,
      success: true,
      url: "/",
    };
  }

  static async profileUser(): Promise<Result> {
    return { action: "redirect", success: false };
  }
}
