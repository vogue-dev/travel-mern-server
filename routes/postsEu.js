import express from 'express';
import { getPostsEu, createPostEu } from '../controllers/postsEu.js';

const router = express.Router();

router.get('/', getPostsEu);
router.post('/', createPostEu);

export default router;
