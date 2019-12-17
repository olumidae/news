import Joi from 'joi';
/**
 * @fileoverview class to hold validation methods
 * @class Validator
 * @exports Validator
*/

class Validator {
  /**
   * validate data by checking with a predefined Joi schema
   * @param {Object} data
   * @param {Object} schema
   * @param {Object} response
   *  @param {Object} next
   *  @callback {Function} next
   *  @returns {Object} error
   */

  static validateJoi(data, schema) {
    let error;
    const validationOptions = {
      allowUnknown: true, // allow unknow keys that will be ignored
      stripUnknown: true, // remove unknown keys from the validation data
    };
    Joi.validate(data, schema, validationOptions, (err) => {
      if (err) {
        error = err.details ? err.details[0].message.replace(/['"]/g, '') : err.message;
      }
    });
    return error;
  }
}

export default Validator;
