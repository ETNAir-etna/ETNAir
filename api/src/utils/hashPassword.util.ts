import { Result } from "../interfaces/result";

let createError = require("http-errors");

const bcrypt = require("bcrypt");

export const hashPassword = async (password: string) => {

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        return hashedPassword;
    } catch (error) {
        // TODO : find the error message to send in the catch og hashed function
        throw createError(500, "A VOIR dans haspassword");
    }
}; 

export const comparePassword = async(password: string, hashedPassword : string): Promise<boolean> => {
    try {
        const match = await bcrypt.compare(password, hashedPassword);
        if (match) {
            return true
        } else {
            // TODO : find a good status error code
            throw createError(404, "Invalid password");
        }
    } catch (error) {
        // TODO : change the error message && find good status error code
        throw createError(400, "SERVOR ERROR try again in compare function");
    }
}
