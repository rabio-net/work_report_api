import { Router } from 'express';
import AliveController from '../controllers/aliveController';

const router = Router();

router.get(
  '/',
  AliveController.alive,
);

export default router;