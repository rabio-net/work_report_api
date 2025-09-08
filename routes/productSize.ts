import { Router } from 'express';
import { verifyAccessToken } from '../middlewares/token';
import ProductSizeController from '../controllers/productSizeController';

const router = Router();

router.get(
  '/records',
  verifyAccessToken,
  ProductSizeController.selectProductSizes
);

export default router;