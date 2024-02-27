import express from 'express';
import { createAdmin } from '../controllers/admin.controller.js';
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router();

router.post('/create', verifyToken, createAdmin)



export default router;