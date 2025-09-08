import { Router } from 'express';
import { verifyAccessToken } from '../middlewares/token';
import LotIdentifierController from '../controllers/lotIdentifierController';

const router = Router();

router.get(
  '/records',
  verifyAccessToken,
  LotIdentifierController.selectLotIdentifiers
);
router.post(
  '/record',
  verifyAccessToken,
  LotIdentifierController.insertLotIdentifier
);

export default router;