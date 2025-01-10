import { Request, Response, NextFunction } from "express";
import { Result } from "../interfaces/result";
var createError = require("http-errors");

export const sendJsonPromise =
  (promise: Promise<Result>, notFoundMessage?: string) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await promise;

      if (!result) {
        return next(createError(404, notFoundMessage));
      }

      if (result.key === true) {
        res.cookie("jwt", result.token, {
          httpOnly: true,
          secure: process.env.NODE_ENV === "prod",
          sameSite: "strict",
        });
      } else if (result.key === false) {
        res.clearCookie("jwt", { httpOnly: true, secure: true });
      }

      if (result && result.success) {
        if (result.action === "delete") {
          return res.status(200).json(result);
        }

        if (result.action === "create" || result.action === "update") {
          return res.status(201).json(result);
        }
        

        if (result.action === "log") {
          if (result.redirect && result.url) {
            return res.redirect(302, result.url);
          }
        }

        return res.status(200).json(result);
      }
    } catch (error) {
      next(error);
    }
  };
