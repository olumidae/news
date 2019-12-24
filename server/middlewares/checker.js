/* eslint-disable import/prefer-default-export */
/* eslint-disable no-useless-catch */
import ArticleModel from '../models/articleModel';
import errorStrings from '../helpers/errors';
import responseHelper from '../helpers/responseHelper';

const articleModel = new ArticleModel('articles');

export async function findArticleById(req, res, next) {
  try {
    const { rows } = await articleModel.selectWhere('*', 'id=$1', [req.params.articleId]);
    if (!rows[0]) {
      return responseHelper.setError(res, 400, errorStrings.noArticle);
    }
    return next();
  } catch (error) {
    throw error;
  }
}

export async function findUserArticleID(req, res, next) {
  const { id } = req.user;
  const { articleId } = req.params;
  try {
    const { rows } = await articleModel.selectWhere('*', 'id=$1 AND createdBy=$2', [articleId, id]);
    if (!rows[0]) {
      return responseHelper.setError(res, 409, errorStrings.wrongArticle);
    }
    return next();
  } catch (error) {
    throw error;
  }
}
