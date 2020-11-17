import express from 'express';
import { getPostsUA, createPostUA } from '../controllers/postsUA.js';

const router = express.Router();

router.get('/', getPostsUA);
router.post('/', createPostUA);

export default router;
