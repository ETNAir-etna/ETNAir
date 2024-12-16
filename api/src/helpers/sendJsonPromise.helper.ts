import { Request, Response, NextFunction } from "express";
import { Result } from "../interfaces/result";
var createError = require("http-errors");

export const sendJsonPromise =
  (promise: Result, notFoundMessage: string) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = promise;

      if (!result) {
        return next(createError(404, notFoundMessage));
      }

      if (result.action === "redirect" && result.url) {
        return res.redirect(result.url);
      } else if (result.action === "data") {
        if (JSON.stringify(result.data) === "{}") {
          return res.status(204).json(result);
        }
        return res.status(200).json(result);
      }
      return res.status(200).json(result);
    } catch (error) {
      return next(error);
    }
  };
