import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken'
const createError = require('http-errors');

export const verifyToken = (req: Request, res: Response, next: NextFunction) => {
  const token = req.cookies.jwt;

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!);
    if (decoded) {
      res.locals.user = decoded;
      next();
    } else {
      next(createError(401, "Unauthorized"));
    }
  } catch (err) {
    throw(err)
  }
};


