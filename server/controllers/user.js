import UserModel from '../models/usersModel';
import generateToken from '../helpers/token';
import errorStrings from '../helpers/errors';
import ResponseHelpers from '../helpers/responseHelper';

const usersModel = new UserModel('users');

/**
 * @fileoverview - class tht manages all user logic
 * @class- UsersController
 * @requires - ../models/usersModel
 * @requires - ../helpers/token
 * @requires - ../helpers/errors
 * @requires - ../helpers/resonseHelper
 * @exports - UsersController
 */

class UsersController {
  /**
   * Register a user
   * @param {object} req
   * @param {object} res
   */

  static async signup(req, res) {
    const { email } = req.body;
    try {
      const isalreadyRegistered = await usersModel.findUserByEmail(email);
      if (isalreadyRegistered) {
        return ResponseHelpers.setError(res, 409, errorStrings.emailExists);
      }
      const newUser = await usersModel.signupQuery(req.body);
      if (!newUser) {
        throw new Error(errorStrings.serverError);
      }
      const userData = UsersController.createUserObject(newUser);
      return ResponseHelpers.setSuccess(res, 201, userData);
    } catch (error) {
      return ResponseHelpers.setError(res, 500, errorStrings.serverError);
    }
  }

  /**
   * create user object
   * @param {object} newUser this is an object from database
   * @returns {object} userData
   */

  static createUserObject(newUser) {
    const userData = {
      id: newUser.id,
      firstname: newUser.firstname,
      lastname: newUser.lastname,
      email: newUser.email,
      token: generateToken(newUser),
      isAdmin: newUser.isAdmin,
      isLoggedIn: newUser.isLoggedIn,
      createdOn: newUser.createdOn,
    };
    return userData;
  }

  /**
   * Login a registered user
   * @param {object} req
   * @param {object} res
  */

  static async signin(req, res) {
    try {
      const signInResult = await usersModel.signinQuery(req.body);
      if (signInResult.error === 'wrong-password') {
        return ResponseHelpers.setError(res, 403, errorStrings.loginFailure);
      }
      if (!signInResult) {
        throw new Error(errorStrings.serverError);
      }
      const userData = UsersController.loginUserObject(signInResult);
      return ResponseHelpers.setSuccess(res, 200, userData);
    } catch (error) {
      return ResponseHelpers.setError(res, 500, errorStrings.serverError);
    }
  }

  static loginUserObject(existingUser) {
    const userData = {
      email: existingUser.email,
      token: generateToken(existingUser),
      isLoggedIn: existingUser.isLoggedIn,
    };
    return userData;
  }
}

export default UsersController;
