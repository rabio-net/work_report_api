import { Router } from 'express';
import { verifyAccessToken } from '../middlewares/token';
import ProductNameStandardController from '../controllers/productNameStandardController';

const router = Router();

router.get(
  '/records',
  verifyAccessToken,
  ProductNameStandardController.selectProductNameStandards
);

export default router;