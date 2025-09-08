import { Router } from 'express';
import { verifyAccessToken } from '../middlewares/token';
import ProcessStandardController from '../controllers/processStandardController';

const router = Router();

router.get(
  '/records',
  verifyAccessToken,
  ProcessStandardController.selectProcessStandards
);

export default router;