import { Router } from 'express';
import { generateImageAi } from './GenerateImageAi.service.js';
const router = Router();


router.post('/', generateImageAi)

export default router