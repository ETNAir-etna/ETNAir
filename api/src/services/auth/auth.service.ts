
import { UserModel } from '../../models/UserModel';
import { hashPassword } from '../../utils/hashPassword.util';

export class AuthService {

    static async registerUser(email: string, password: string) {
        const hash = await hashPassword(password);
        return UserModel.createUser(email, hash)
    }

    static async loginUser(email: string, password: string) {
        return UserModel.connectUser(email, password)
    }

    static async logoutUser() {
        return UserModel.disconnectUser()
    }


}