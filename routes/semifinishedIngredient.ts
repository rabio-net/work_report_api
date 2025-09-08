import { Router } from 'express';
import { verifyAccessToken } from '../middlewares/token';
import SemifinishedIngredientController from '../controllers/semifinishedIngredientController';

const router = Router();

router.get(
  '/records',
  verifyAccessToken,
  SemifinishedIngredientController.selectSemifinishedIngredients
);
router.get(
  '/include-semifinished',
  verifyAccessToken,
  SemifinishedIngredientController.selectSemifinishedIngredients_includeSemifinished
);
router.get(
  '/include-ingredient-storing',
  verifyAccessToken,
  SemifinishedIngredientController.selectSemifinishedIngredients_includeIngredientStoring
);
router.post(
  '/record',
  verifyAccessToken,
  SemifinishedIngredientController.insertSemifinishedIngredient
);

export default router;