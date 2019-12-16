import express from 'express';
import UserController from '../controllers/user';
import { signupValidator, loginValidator } from '../middlewares/auth';

const router = express.Router();
/**
 * @fileoverview This file manages all the routes in the application
 * @requires UserController
 *
 * @exports routes.js
 */

router.post('/auth/signup', signupValidator, UserController.signup);
router.post('/auth/signin', loginValidator, UserController.signin);

export default router;
