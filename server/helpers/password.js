/**
 * @fileoverview - password generator
 * @requires bcrypt
 * @exports passwordHasher
 */

import bcrypt from 'bcrypt';

const passwordHasher = (password) => bcrypt.hashSync(password, 10);

const comparePasswords = (userPassword, hashedPassword) => bcrypt.compareSync(userPassword, hashedPassword);

export default { passwordHasher, comparePasswords };
