import express from 'express';
import { createCompany } from '../controllers/company.controller.js';
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router();

router.post('/create', verifyToken, createCompany)



export default router;