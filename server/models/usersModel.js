/* eslint-disable no-useless-catch */
import passwordHelper from '../helpers/password';
import Model from './model';

/**
 * @fileoverview - class to manage all users data storage
 * @class - UsersModel
 * @requires - ../helpers/pasword
 * @requires - ../models/model
 * @exports - userModel..js
 */

class UserModel extends Model {
  /**
   * Add new user to data structure
   * @param {object} req
   * @returns {object}
  */

  async signupQuery({fullname, email, password, bio }) {
    const hashedPassword = passwordHelper.passwordHasher(password);
    // eslint-disable-next-line no-useless-catch
    const values = [fullname, email, hashedPassword, bio];
    try {
      const { rows } = await this.insert('fullName, email, password, bio', '$1, $2, $3, $4', values)
      return rows[0];
    } catch (error) {
      throw error;
    }
  }

  /**
   * Sign in new user
   * @param {string} email
   * @param {string} password
   * @returns {Object}
  */

  async signinQuery({ email, password }) {
    try {
      const foundUser = await this.findUserByEmail(email);
      if (foundUser && passwordHelper.comparePasswords(password, foundUser.password)) {
        const { rows } = await this.update('isLoggedIn=true', 'email= $1', [email]);
        return rows[0];
      }
      return { error: 'wrong-password' };
    } catch (error) {
      throw error;
    }
  }

  /**
   * Find user by email
   * @param {string} email
   * @returns boolean
  */

  async findUserByEmail(email) {
    try {
      const { rows } = await this.selectWhere('*', 'email=$1', [email]);
      return rows[0];
    } catch (error) {
      throw error;
    }
  }

  /**
   * Find a user by ID
   * @param {string} ID
   * @return boolean
  */

  async findUserById(id) {
    try {
      const { rows } = await this.selectWhere('*', 'id=$1', [id]);
      return rows[0];
    } catch (error) {
      throw error;
    }
  }
}

export default UserModel;
