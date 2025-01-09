import bcrypt from 'bcryptjs';

/**
 * @param  {string} password
 * @returns Promise
 */
export const hashPassword = async (password: string): Promise<string> => {
  console.log(process.env.BCRYPT_SALT)
  const salt: number = process.env.BCRYPT_SALT !== undefined ? parseInt(process.env.BCRYPT_SALT, 10) : 10;
  const hashedPwd = bcrypt.hash(password, salt);
  return hashedPwd
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
