/* eslint-disable no-useless-catch */
import Model from './model';

/**
 * @fileoverview - class that manages all article data storage
 * @class -ArticleModel
 * @requires - ./model
 * @exports - ArticleModel
*/

class ArticleModel extends Model {
  /**
   * Add new article to the database
   * @param {object}
   * @returns {object} created article
  */

  async createArticle(user, body) {
    const {id} = user;
    const articleTitle = body.title;
    const articleContent = body.article;

    const createdOn = new Date();
    const values = [articleTitle, articleContent, id, createdOn];
    try {
      const { rows } = await this.insert('title, article, createdBy, createdOn', '$1, $2, $3, $4', values);
      return rows[0];
    } catch (error) {
      throw error;
    }
  }

  /**
   *  Find article by title
   * @param {string} title
   * @returns {boolean}
   */
  async findArticleByTitle(title) {
    try {
      const { rows } = await this.selectWhere('*', 'title=$1', [title]);
      return rows[0];
    } catch (error) {
      throw error;
    }
  }
}

export default ArticleModel;
