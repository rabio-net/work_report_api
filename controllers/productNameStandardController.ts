import { Request, Response, NextFunction } from 'express';
import { getPwAuthToken } from '../middlewares/token';
import ProductNameStandardService from '../services/productNameStandardService';

export default class ProductNameStandardController {
  static async selectProductNameStandards(
    request: Request,
    response: Response,
  ) {
    const pwAuth = getPwAuthToken(request);
    if (!pwAuth) {
      response.json(JSON.stringify({ status: 401 }));
      return;
    }
    const icid = (request.query.ingredient_classification_id ?? '') as string;
    const iid = (request.query.ingredient_id ?? '') as string;
    const psid = (request.query.product_standard_id ?? '') as string;
    const pzid = (request.query.product_size_id ?? '') as string;
    const pid = (request.query.process_id ?? '') as string;
    const pdid = (request.query.process_standard_id ?? '') as string;
    const res = await new ProductNameStandardService()
      .selectProductNameStandards(pwAuth, [ icid, iid, psid, pzid, pid, pdid ]);
    response.json(JSON.stringify(res));
  }
}
