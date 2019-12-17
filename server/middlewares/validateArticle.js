import Joi from 'joi';
import errorStrings from '../helpers/errors';
import Validator from '../helpers/Validator';
import responseHelpers from '../helpers/responseHelper';

/**
 * @fileoverview Class to validate article creation
 * @class ValidateArticle
 * @requires ../helpers/errorStrings
 * @requires ../helpers/Validator
 * @requires ../helpers/responseHelpers
 * @exports ValidateArticle
*/

class ValidateArticle {
  /**
   * validate article input form data
   * @param {Object} request
   * @param {Object} response
   * @callback {function} next
   * @returns {Object} error
  */

  static validateArticleFormData(request, response, next) { 
    const title = Joi.string().max(128).required();
    const article = Joi.string().required();

    const createArticleSchema = Joi.object().keys({
      title: title.error(new Error(`title is ${errorStrings.validName}`)),
      article: article.error(new Error(`article ${errorStrings.validName}`)),
      createdOn: Joi.date().iso(),
    });

    const error = Validator.validateJoi(request.body, createArticleSchema);

    if (!error) {
      return next();
    }
    return responseHelpers.setError(response, 400, error);
  }
}
export default ValidateArticle;
