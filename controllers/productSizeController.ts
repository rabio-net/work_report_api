import { Request, Response, NextFunction } from 'express';
import { getPwAuthToken } from '../middlewares/token';
import ProductSizeService from '../services/productSizeService';

export default class ProductSizeController {
  static async selectProductSizes(
    request: Request,
    response: Response,
  ) {
    const pwAuth = getPwAuthToken(request);
    if (!pwAuth) {
      response.json(JSON.stringify({ status: 401 }));
      return;
    }
    const res = await new ProductSizeService().selectProductSizes(pwAuth);
    response.json(JSON.stringify(res));
  }
}
