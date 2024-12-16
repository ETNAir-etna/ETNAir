// src/middlewares/auth.middleware.ts
import jwt from 'jsonwebtoken'
import { Request, Response, NextFunction } from 'express';

export const verifyToken = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers['authorization']?.split(' ')[1]; // "Bearer <token>"

    if (!token) {
        return res.status(401).json({ message: 'Access denied. No token provided.' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET!);
        req.user = decoded; // Attache les données utilisateur au `req`
        next();
    } catch (err) {
        res.status(403).json({ message: 'Invalid or expired token.' });
    }
};
