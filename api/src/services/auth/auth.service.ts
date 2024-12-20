
import { servicesLogger } from '../../configs/logger';
import jwt from 'jsonwebtoken'
import { Result } from '../../interfaces/result';
import { UserModel } from '../../models/UserModel';
import { comparePassword, hashPassword } from '../../utils/hashPassword.util';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class AuthService {

    static async registerUser(email: string, password: string): Promise<Result> {
        const hash = await hashPassword(password);
        const user = await UserModel.createUser(email, hash);
        servicesLogger.silly(`Welcome ${user} !`)
        return { action: "create", data: user, success: true, redirect: true, url: "/" };
    };

    static async loginUser(email: string, password: string): Promise<Result> {
        const user = await UserModel.findByEmail(email);
        if (!user) {
            throw Error();
        }
        await comparePassword(password, user.password);
        const newToken = jwt.sign(
            { id : user.id , email },
            process.env.JWT_SECRET!,
            { expiresIn: process.env.JWT_EXPIRES_IN || '1h' }
        );
        return { key: true, token: newToken, action: "log", success: true, redirect: true, url: "/profile" };
    };

        
    // static async loginUser(email: string, password: string): Promise<Result> {
    //     const pwdhashed: string = await UserModel.connectUser(email);
    //     const match: boolean = await comparePassword(password, pwdhashed);
    //     if (!match) return { action: "redirect", success: false, url: "/" };
    //     const { id } = (await UserModel.findByEmail(email))!;
    //     const newToken = jwt.sign(
    //         { id, email },
    //         process.env.JWT_SECRET!,
    //         { expiresIn: process.env.JWT_EXPIRES_IN || '1h' }
    //     );
    //     return { key: true, token: newToken, action: "redirect", success: true, url: '/profile' };
    // };

    static async logoutUser(): Promise<Result> {
        return { key: false, action: "log", redirect: true, success : true, url: '/'};
    };

    static async profileUser(): Promise<Result> {
        return { action: "redirect", success: false };
    };

};