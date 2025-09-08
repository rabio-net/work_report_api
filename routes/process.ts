import { Router } from 'express';
import { verifyAccessToken } from '../middlewares/token';
import ProcessController from '../controllers/processController';

const router = Router();

router.get(
  '/records',
  verifyAccessToken,
  ProcessController.selectProcesses
);

export default router;