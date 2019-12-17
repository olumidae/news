import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import errorStrings from '../helpers/errors';
import ResponseHelper from '../helpers/responseHelper';

dotenv.config();
const { secret } = process.env;

/**
 * @class Authorize User
 * @requires jsonwebtoken
 * @requires dotenv
 * @requires '../helpers/errorStrings'
 * @requires '../helpers/responseHelper'
*/

class Auth {
  /**
   * Authenticate Users
   * @param {Object} request
   * @param {Object} response
   * @param {callback} next
  */

  static authenticateUser(request, response, next) {
    try {
      let token = request.headers.authorization;
      // if (token && console.log(token.startWith('Bearer '))) {
      //   token = token.slice(7, token.length);
      // }
      request.user = Auth.verifyToken(token);
      return next();
    } catch (error) {
      if (error.message === 'jwt-expired') {
        return ResponseHelper.setError(response, 419, errorStrings.sessionExpired);
      }
      return ResponseHelper.setError(response, 401, errorStrings.notAuthenticated);
    }
  }

  /**
 * Verify a token by using a secret key and a public key.
 * @param {Object} token
 * @return {Object} return verified token
 */

  static verifyToken(token) {
    return jwt.verify(token, secret);
  }
}

export default Auth;
