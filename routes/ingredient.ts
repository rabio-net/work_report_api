import { Router } from 'express';
import { verifyAccessToken } from '../middlewares/token';
import IngredientController from '../controllers/ingredientController';

const router = Router();

router.get(
  '/records',
  verifyAccessToken,
  IngredientController.selectIngredients
);

export default router;