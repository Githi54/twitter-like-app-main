import express from 'express';
import { getPosts } from '../controllers/posts.controller.js';

const postRouter = express.Router();

postRouter.get('/', getPosts)

export { postRouter };
