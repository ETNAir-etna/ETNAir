import { Result } from "../interfaces/result";

export class ErrorManager {
    static handlePrismaError(error: any): Result {
        if (error.code === "P2002") {
            return {
                status: 409,
                action: "create",
                success: false,
                message: `${error.meta.target[0]} already exists !`
            };
        }
        if (error.code === "P2003") {
            return {
                action: "delete",
                success: false,
                message: "Cannot delete resource because it is referenced elsewhere."
            };
        }
        return {
            action: "unknown",
            success: false,
            redirect: false,
            message: "An unexpected database error occurred."
        };
    }
}