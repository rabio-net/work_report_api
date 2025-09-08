import { Request, Response, NextFunction } from 'express';
import { getPwAuthToken } from '../middlewares/token';
import ProductStandardService from '../services/productStandardService';

export default class ProductStandardController {
  static async selectProductStandards(
    request: Request,
    response: Response,
  ) {
    const pwAuth = getPwAuthToken(request);
    if (!pwAuth) {
      response.json(JSON.stringify({ status: 401 }));
      return;
    }
    const icid = (request.query.ingredient_classification_id ?? '0') as string
    const res = await new ProductStandardService().selectProductStandards(pwAuth, icid);
    response.json(JSON.stringify(res));
  }
}
