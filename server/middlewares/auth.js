/* eslint-disable import/prefer-default-export */
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import { signupChecker, loginChecker } from '../helpers/user';

/**
 * @fileoverview handles every user related action
 * @requires {signupChecker} ../helpers/user
 * @exports signupValidator
 */

export const signupValidator = (req, res, next) => {
  const { error } = signupChecker(req.body);
  if (error) {
    return res.status(400).json({
      status: 'error',
      error: error.details[0].message.replace(/['"]/g, ''),
    });
  }
  next();
};

export const loginValidator = (req, res, next) => {
  const { error } = loginChecker(req.body);
  if (error) {
    return res.status(400).json({
      status: 'error',
      error: error.details[0].message.replace(/['"]/g, ''),
    });
  }
  next();
};