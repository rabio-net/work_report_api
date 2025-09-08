import { Router } from 'express';
import { verifyAccessToken } from '../middlewares/token';
import PackingStyleController from '../controllers/packingStyleController';

const router = Router();

router.get(
  '/records',
  verifyAccessToken,
  PackingStyleController.selectPackingStyles
);

export default router;