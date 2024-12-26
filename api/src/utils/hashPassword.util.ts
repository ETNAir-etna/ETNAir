
import bcrypt from "bcrypt";

/**
 * @param  {string} password
 * @returns Promise
 */
export const hashPassword = async (password: string): Promise<string> => {
  const salt: number = Number(process.env.BCRYPT_SALT) || 12;
  return bcrypt.hash(password, salt);
};

/**
 * @param  {string} password
 * @param  {string} hashedPassword
 * @returns Promise
 */
export const comparePassword = async (password: string, hashedPassword: string): Promise<boolean> => {
  const isMatch = await bcrypt.compare(password, hashedPassword);
  if (!isMatch) {
    throw new Error("Invalid password");
  }
  return isMatch;
};
