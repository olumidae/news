import Joi from 'joi';

/**
 * Validates user inputs fields for signup
 * @requires - joi
 * @param {object} - user
 * @return {object}
 * @exports - signupChecker
 */

export const signupChecker = (user) => {
  const pattern = /^[a-zA-Z0-9!@#$%&*]{3,25}$/;
  const signupFormat = {
    fullname: Joi.string().max(128).required(),
    email: Joi.string().min(5).max(128).email().required(),
    password: Joi.string().regex(pattern).min(7).max(255).required(),
    bio: Joi.string().max(300).required(),
  };
  return Joi.validate(user, signupFormat);
};

/**
 * Validates user inputs fields for login
 * @requires - joi
 * @param {object} - user
 * @return {object}
 * @exports - loginChecker
 */

export const loginChecker = (user) => {
  const loginFormat = Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().min(7).required(),
  }).with('email', 'password');
  return Joi.validate(user, loginFormat);
};
