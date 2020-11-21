import express from 'express';
import { getPostsUa, createPostUa } from '../controllers/postsUa.js';

const router = express.Router();

router.get('/', getPostsUa);
router.post('/', createPostUa);

export default router;
