import { Router } from 'express';
import { verifyAccessToken } from '../middlewares/token';
import IngredientStoringController from '../controllers/ingredientStoringController';

const router = Router();

router.get(
  '/record',
  verifyAccessToken,
  IngredientStoringController.selectIngredientStoring
);

export default router;