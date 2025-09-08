import { Router } from 'express';
import AuthController from '../controllers/authController';

const router = Router();

router.post(
  '/users',
  AuthController.login,
);

export default router;