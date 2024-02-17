import express from 'express';
import { createLand } from '../controllers/land.controller.js';
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router();

router.post('/create', verifyToken, createLand)



export default router;