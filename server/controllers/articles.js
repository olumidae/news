/* eslint-disable no-useless-catch */
import ArticleModel from '../models/articleModel';
import errorStrings from '../helpers/errors';
import ResponseHelper from '../helpers/responseHelper';

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
        return ResponseHelper.setError(res, 409, errorStrings.articleExists);
      }
      //
      const newArticle = await articleModel.createArticle(req.user, req.body);
      if (!newArticle) {
        throw new Error(errorStrings.serverError);
      }
      //
      // const articleData = ArticlesController.createArticleObject(newArticle);
      return ResponseHelper.setSuccess(res, 201, newArticle);
    } catch (error) {
      return ResponseHelper.setError(res, 500, errorStrings.serverError);
    }
  }

  static async editArticles(req, res) {
    try {
      const editArticle = await articleModel.updateArticle(req.body, req.params);
      return ResponseHelper.setSuccess(res, 200, editArticle);
    } catch (error) {
      return ResponseHelper.setError(res, 500, errorStrings.serverError);
    }
  }

  static async deleteArticle(req, res) {
    const { articleId } = req.params;
    try {
      const deletedArticle = await articleModel.deleteArticle(articleId);

      if (!deletedArticle) {
        return ResponseHelper.setError(res, 200, errorStrings.serverError);
      }
      return ResponseHelper.setSuccess(res, 200, { message: 'Article deleted successfully' });
    } catch (error) {
      throw error;
    }
  }
}

export default ArticlesController;
