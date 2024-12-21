import { Result } from "../interfaces/result";

import bcrypt from "bcrypt";

export const hashPassword = async (password: string): Promise<string> => {
  const salt: number = Number(process.env.BCRYPT_SALT) || 12;
  return bcrypt.hash(password, salt);
};

export const comparePassword = async (
  password: string,
  hashedPassword: string
): Promise<boolean | Result> => {
  const isMatch = await bcrypt.compare(password, hashedPassword);
  if (!isMatch) {
    throw new Error("Invalid password");
  }
  return isMatch;
};
