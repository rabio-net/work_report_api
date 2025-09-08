import { Router } from 'express';
import { verifyAccessToken } from '../middlewares/token';
import IngredientClassificationController from '../controllers/ingredientClassificationController';

const router = Router();

router.get(
  '/records',
  verifyAccessToken,
  IngredientClassificationController.selectIngredientClassifications
);

export default router;