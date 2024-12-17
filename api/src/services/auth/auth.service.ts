import jwt from 'jsonwebtoken'
import { Result } from '../../interfaces/result';
import { UserModel } from '../../models/UserModel';
import { comparePassword, hashPassword } from '../../utils/hashPassword.util';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class AuthService {

    static async registerUser(email: string, password: string): Promise<Result> {
        const hash = await hashPassword(password);
        const data = UserModel.createUser(email, hash);
        return { action: "redirect", data: data, success: true, url: '#' };
    };

    static async loginUser(email: string, password: string): Promise<Result> {
        const pwdhashed: string = await UserModel.connectUser(email);
        const match: boolean = await comparePassword(password, pwdhashed);
        if (!match) return { action: "redirect", success: false, url: "/" };
        const { id } = (await UserModel.findByEmail(email))!;
        const newToken = jwt.sign(
            { id, email },
            process.env.JWT_SECRET!,
            { expiresIn: process.env.JWT_EXPIRES_IN || '1h' }
        );
        return { key: true, token: newToken, action: "redirect", success: true, url: '/profile' };
    };

    static async logoutUser() {
        return { action: "redirect", success: true, url: '/' };
    };


};