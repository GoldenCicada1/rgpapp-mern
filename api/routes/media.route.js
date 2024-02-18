import express from 'express';
import { createMedia } from '../controllers/media.controller.js';
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router();

router.post('/create', verifyToken, createMedia)



export default router;