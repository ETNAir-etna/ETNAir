
import { Result } from '../../interfaces/result';
import { UserModel } from '../../models/UserModel';
import { comparePassword, hashPassword } from '../../utils/hashPassword.util';


export class AuthService {

    static async registerUser(email: string, password: string): Promise<Result> {
        const hash = await hashPassword(password);
        const data = UserModel.createUser(email, hash);
        return { action: "redirect", data: data, success : true, url: '#'};
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