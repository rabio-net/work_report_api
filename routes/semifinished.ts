import { Router } from 'express';
import { verifyAccessToken } from '../middlewares/token';
import SemifinishedController from '../controllers/semifinishedController';

const router = Router();

router.get(
  '/records',
  verifyAccessToken,
  SemifinishedController.selectSemifinisheds
);
router.get(
  '/record',
  verifyAccessToken,
  SemifinishedController.selectSemifinished
);
router.post(
  '/record',
  verifyAccessToken,
  SemifinishedController.insertSemifinished
);
router.put(
  '/record',
  verifyAccessToken,
  SemifinishedController.updateSemifinished
);

export default router;