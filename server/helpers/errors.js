/**
 * @fileoverview - errors
 * @exports errorMessages
 */

const errorMessages = {
  serverError: 'Damn! Looks like something broke',
  badRequest: 'Error! Bad Request',
  pageNotFound: 'Oops! Page not found. Looks like your url is invalid',
  passwordEmpty: 'password must not be empty',
  passwordLength: 'password length must be at least 8 characters long',
  emailExists: 'Email address has already been registered',
  validName: 'field cannot be empty',
  validEmail: 'email must be a valid email',
  loginFailure: 'Could not log in. Email and password do not match',
  sessionExpired: 'Session expired, login again',
  notAuthenticated: 'You must login to have access to this feature',
  articleExists: 'Article has already been posted',
  noArticle: 'Article does not exist',
  wrongArticle: 'Cannot edit article created by another user',
};

export default errorMessages;
