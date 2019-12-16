import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();
const { secret } = process.env;
const expirationTime = 84600;

/**
 * @fileoverview - function to generate token
 * @param {Object} userObject
 * @returns {Object} token
 * @exports generateToken
*/

const generateToken = ({ id, email }) => jwt.sign({ id, email }, secret, { expiresIn: expirationTime });

export default generateToken;
