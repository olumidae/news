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
    const { id } = user;
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
   * @returns {Object}
   */
  async findArticleByTitle(title) {
    try {
      const { rows } = await this.selectWhere('*', 'title=$1', [title]);
      return rows[0];
    } catch (error) {
      throw error;
    }
  }

  /**
   * Find an article by id
   * @param {string} articleId
   * @returns {Object}
  */

  async findArticleById(articleId) {
    try {
      const { rows } = await this.selectWhere('*', 'id=$1', [articleId]);
      return rows[0];
    } catch (error) {
      throw error;
    }
  }

  async findUserArticleId(id, articleId) {
    // const { id } = user;
    console.log('>>>>> THIS IS THE ID', id);
    // const { articleId } = params;
    console.log('THIS IS THE ARTICLE ID', articleId);
    try {
      const { rows } = await this.selectWhere('*', 'createdBy, id', '$1, $2', [id, articleId]);
      console.log(rows);
      return rows[0];
    } catch (error) {
      throw error;
    }
  }

  async updateArticle(body, params) {
    const { title, article } = body;
    const { articleId } = params;
    const updatedOn = new Date();
    const values = [title, article, updatedOn, articleId];
    try {
      const { rows } = await this.update('title=$1, article=$2, updatedOn=$3', 'id=$4', values);
      console.log( rows[0])
      return rows[0];
    } catch (error) {
      throw error;
    }
  }
}

export default ArticleModel;
