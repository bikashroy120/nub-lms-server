import bcrypt from 'bcryptjs';

export const hashPassword = async (password: string) => {
  const salt = await bcrypt.genSalt(10);
  const hashed = await bcrypt.hash(password, salt);
  return hashed;
};

export const comparePassword = async (
  userPassword: string,
  hashPassword: string
) => {
  const isMatch = await bcrypt.compare(userPassword, hashPassword);
  return isMatch;
};
