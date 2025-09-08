import { Router } from 'express';
import { verifyAccessToken } from '../middlewares/token';
import ProductIngredientController from '../controllers/productIngredientController';

const router = Router();

router.get(
  '/records',
  verifyAccessToken,
  ProductIngredientController.selectProductIngredients
);
router.get(
  '/include-semifinished',
  verifyAccessToken,
  ProductIngredientController.selectProductIngredients_includeSemifinished
);
router.post(
  '/record',
  verifyAccessToken,
  ProductIngredientController.insertProductIngredient
);

export default router;