import express from 'express';
import { createLandOwnership } from '../controllers/landOwnership.controller.js';
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router();

router.post('/create', verifyToken, createLandOwnership)



export default router;