import { NextFunction, Request, Response } from "express";
import { UserService } from "../services/user.service";
import { sendJsonPromise } from "../helpers/sendJsonPromise.helper";

export class UserController {
  static async getUsers(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    sendJsonPromise(UserService.getUsers(), "No user found")(req, res, next);
  }

  static async getUser(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const { id } = req.params;
    sendJsonPromise(UserService.getUserById(id), "User not in the database")(
      req,
      res,
      next
    );
  }

  static async updateUser(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const { id } = req.params;
    const updatedData = req.body;
    sendJsonPromise(
      UserService.updateUser(id, updatedData),
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
      UserService.deleteUser(id),
      "User not found or deletion failed"
    )(req, res, next);
  }
}
