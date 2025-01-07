
import { Router } from 'express';
import handelAsycError from '../../handelError/handelAsycError.js';
import postModel from '../../database/models/post.model.js';
import { createPost, getAllPosts } from './post.service.js';
const router = Router();
router.get('/getAllPosts', getAllPosts)
router.post('/',createPost)
export default router