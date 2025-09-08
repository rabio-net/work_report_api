import { Router } from 'express';
import { verifyAccessToken } from '../middlewares/token';
import ProductController from '../controllers/productController';

const router = Router();

router.get(
  '/records',
  verifyAccessToken,
  ProductController.selectProducts
);
router.get(
  '/record',
  verifyAccessToken,
  ProductController.selectProduct
);
router.post(
  '/record',
  verifyAccessToken,
  ProductController.insertProduct
);
router.put(
  '/record',
  verifyAccessToken,
  ProductController.updateProduct
);

export default router;