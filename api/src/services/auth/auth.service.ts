
import { Result } from '../../interfaces/result';
import { UserModel } from '../../models/UserModel';
import { comparePassword, hashPassword } from '../../utils/hashPassword.util';

export class AuthService {

    static async registerUser(email: string, password: string): Promise<Result> {
        const hash = await hashPassword(password);
        const user = await UserModel.createUser(email, hash);
        return { action: "create", data: user, success: true, redirect: true, url: "/" };
    };

    static async loginUser(email: string, password: string): Promise<Result> {
        const user = await UserModel.findByEmail(email);
        if (!user) {
            throw Error();
        }
        await comparePassword(password, user!.password);
        
        return { action: "login", success: true, redirect: true, url: "/profile" };
    };

    static async logoutUser() {
        return { action: "logout", redirect: true, success : true, url: '/'};
    };


};