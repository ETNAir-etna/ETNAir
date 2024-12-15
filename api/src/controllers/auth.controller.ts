import { NextFunction, Request, Response  } from "express";
import { sendJsonPromise } from "../helpers/sendJsonPromise.helper";
import { AuthService } from "../services/auth/auth.service";



export class AuthController {

    
    static async registerUser(req: Request, res: Response, next: NextFunction): Promise<void> {
        const { email, password } = req.body;
        sendJsonPromise(AuthService.registerUser(email, password))(req, res, next);
    };

    static async loginUser(req: Request, res: Response, next: NextFunction): Promise<void> {
        // TODO : Find a way to custom a message send to the front
        const { email, password } = req.body;
        sendJsonPromise(AuthService.loginUser(email, password), "Registration failed.")(req, res, next);
    };

    static async logoutUser(req: Request, res: Response, next: NextFunction): Promise<void> {
        // TODO : FINISH the logout routes
        sendJsonPromise(AuthService.logoutUser(), "MESSAGE to find LOGOUT")(req, res, next);
    };
}