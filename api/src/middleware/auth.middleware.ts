import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import createError from 'http-errors';

export const verifyToken = (req: Request, res: Response, next: NextFunction) => {
  const token = req.cookies.jwt;
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!);
    if (decoded) {
      res.locals.user = decoded;
      next();
    } else {
      throw createError(401, "Unauthorized");
    }
  } catch (err) {
    next(err)
  }
};
