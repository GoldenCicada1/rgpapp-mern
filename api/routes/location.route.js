import express from 'express';
import { verifyToken } from '../utils/verifyUser.js';
import { createLocation } from '../controllers/location.controller.js';

const router = express.Router();

router.post('/create', verifyToken, createLocation)



export default router;