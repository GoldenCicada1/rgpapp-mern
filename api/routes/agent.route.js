import express from 'express';
import { createAgent } from '../controllers/agent.controller.js';
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router();

router.post('/create', verifyToken, createAgent)



export default router;