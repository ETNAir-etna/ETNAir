import { Result } from "../interfaces/result";

const bcrypt = require("bcrypt");

export const hashPassword = async (password: string): Promise<string> => {
        return bcrypt.hash(password, 10);
}; 

export const comparePassword = async(password: string, hashedPassword : string): Promise<boolean | Result> => {
    const isMatch = await bcrypt.compare(password, hashedPassword);
    if (!isMatch) {
        throw new Error("Invalid password");
    };
    return isMatch;
};
