
import { Result } from '../../interfaces/result';
import { UserModel } from '../../models/UserModel';
import { ErrorManager } from '../../utils/ErrorManager.util';
import { comparePassword, hashPassword } from '../../utils/hashPassword.util';
var createError = require('http-errors');

export class AuthService {

    static async registerUser(email: string, password: string): Promise<Result> {
        const hash = await hashPassword(password);
        try {
            const data = await UserModel.createUser(email, hash);
            return { action: "create", data, success: true, redirect: true, url: '/' };
        } catch(error) {
            return ErrorManager.handlePrismaError(error);
        };
    };

    static async loginUser(email: string, password: string): Promise<Result> {
        const pwdhashed: string = await UserModel.connectUser(email);
        const match: boolean = await comparePassword(password, pwdhashed);
        if (!match) return { action: "redirect", success : false, url : "#"};
        return { action: "redirect", success : true, url: '#'};
    };

    static async logoutUser() {
        return { action: "redirect", success : true, url: '#'};
    };


};