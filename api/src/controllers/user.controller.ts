import { NextFunction, Request, Response } from "express";
import { UserService } from "../services/user.service";
import { sendJsonPromise } from "../helpers/sendJsonPromise.helper";
import { AuthService } from "../services/auth/auth.service";
import { User } from "../../../shared/types/User";

export class UserController {
  static async getUsers(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    sendJsonPromise(await UserService.getUsers(), "No user found")(
      req,
      res,
      next
    );
  }

  static async getUser(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const { id } = req.params;
    sendJsonPromise(
      await UserService.getUserById(id),
      "User not in the database"
    )(req, res, next);
  }

  static async updateUser(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const { id } = req.params;
    const updatedData: User = req.body;
    sendJsonPromise(
      await UserService.updateUser(id, updatedData),
      "User not found or update failed"
    )(req, res, next);
  }

  static async deleteUser(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const { id } = req.params;
    sendJsonPromise(
      await UserService.deleteUser(id),
      "User not found or deletion failed"
    )(req, res, next);
  }
}
