import express from 'express';
import { createOwner } from '../controllers/owner.controller.js';
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router();

router.post('/create', verifyToken, createOwner)



export default router;