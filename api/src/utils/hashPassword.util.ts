import bcrypt from 'bcryptjs';

/**
 * @param  {string} password
 * @returns Promise
 */
export const hashPassword = async (password: string): Promise<string> => {
  const salt: number | string = process.env.BCRYPT_SALT || 10;
   
  const hashedPwd = bcrypt.hash(password, salt);
  console.log(hashPassword)
  console.log(salt)
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
