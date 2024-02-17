import express from 'express';
import { createProduct, getProductById } from '../controllers/product.controller.js';
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router();

router.post('/create', verifyToken, createProduct)
router.get('/:productId', getProductById);


export default router;