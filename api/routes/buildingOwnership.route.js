import express from 'express';
import { createBuildingOwnership } from '../controllers/buildingOwnership.controller.js';
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router();

router.post('/create', verifyToken, createBuildingOwnership)



export default router;