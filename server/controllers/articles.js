import ArticleModel from '../models/articleModel';
import ResponseHelpers from '../helpers/responseHelper';
import errorStrings from '../helpers/errors';

const articleModel = new ArticleModel('articles');

/**
 * @fileoverview class that manages all article logic
 * @requires - ../models/ArticleModel
 * @requires - ../helpers/responseHelper
 * @requires - ../helpers/errors
 * @exports - ArticlesController
*/

class ArticlesController {
  /**
   * create an article
   * @param {Object} req
   * @param {Object} res
  */

  static async createArticle(req, res) {
    const { title } = req.body;
    try {
      const isAlreadyPosted = await articleModel.findArticleByTitle(title);
      if (isAlreadyPosted) {
        return ResponseHelpers.setError(res, 409, errorStrings.articleExists);
      }
      //
      const newArticle = await articleModel.createArticle(req.user, req.body);
      if (!newArticle) {
        throw new Error(errorStrings.serverError);
      }
      //
      // const articleData = ArticlesController.createArticleObject(newArticle);
      console.log(newArticle);
      return ResponseHelpers.setSuccess(res, 201, newArticle);
    } catch (error) {
      return ResponseHelpers.setError(res, 500, errorStrings.serverError);
    }
  }

  /**
   * create article object
   * @param {object} newArticle this is an object for database
   * @returns {object} articleData
  */

  static createArticleObject(newArticle) {
    const articleData = {
      id: newArticle.id,
      title: newArticle.title,
      article: newArticle.article,
      createdBy: newArticle.creaatedBy,
      createdOn: newArticle.createdOn,
    };
    return articleData;
  }
}

export default ArticlesController;
