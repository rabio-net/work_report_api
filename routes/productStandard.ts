import { Router } from 'express';
import { verifyAccessToken } from '../middlewares/token';
import ProductStandardController from '../controllers/productStandardController';

const router = Router();

router.get(
  '/records',
  verifyAccessToken,
  ProductStandardController.selectProductStandards
);

export default router;