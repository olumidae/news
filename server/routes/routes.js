import express from 'express';
import UserController from '../controllers/user';
import Article from '../controllers/articles';
import { signupValidator, loginValidator } from '../middlewares/auth';
import Auth from '../middlewares/validators';
import ValidateArticle from '../middlewares/validateArticle';
import { findArticleById, findUserArticleID } from '../middlewares/checker';

const router = express.Router();
/**
 * @fileoverview This file manages all the routes in the application
 * @requires UserController
 *
 * @exports routes.js
 */

router.post('/auth/signup', signupValidator, UserController.signup);
router.post('/auth/signin', loginValidator, UserController.signin);
router.post('/articles', Auth.authenticateUser, ValidateArticle.validateArticleFormData, Article.createArticle);
router.patch('/articles/:articleId', Auth.authenticateUser, findArticleById, findUserArticleID, ValidateArticle.validateArticleFormData, Article.editArticles);
router.delete('/articles/:articleId', Auth.authenticateUser, findArticleById, findUserArticleID, Article.deleteArticle);
export default router;
