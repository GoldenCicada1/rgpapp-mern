import express from 'express';
import { createBuilding } from '../controllers/building.controller.js';
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router();

router.post('/create', verifyToken, createBuilding)



export default router;