/**
 * @fileoverview -Class to hold response messages
 * @class ResponseHelper
 * @exports ResponseHelper
 */

class ResponseHelper {
/**
 * success: prepare json response for APi endpoint
 * @param {object} res response ibject
 * @param {Number} statusCode success status code o the response
 * @param {object} data Object data relating to success code
 * @returns {object} json response object
 */


  static setSuccess(res, statusCode, data) {
    return res.status(statusCode).json({
      status: 'success',
      data,
    });
  }

  /**
   * error: prepare json response for the API endpoints
   * @param {res} response object
   * @param {Number} statusCode
   * @param {object} error error message relating to error code
   * @return {object} json response object
  */

  static setError(res, statusCode, error) {
    return res.status(statusCode).json({
      status: 'error',
      error,
    });
  }
}

export default ResponseHelper;
