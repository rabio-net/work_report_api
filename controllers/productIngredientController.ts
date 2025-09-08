import { Request, Response, NextFunction } from 'express';
import { getPwAuthToken } from '../middlewares/token';
import ProductIngredientService from '../services/productIngredientService';

export default class ProductIngredientController {
  static async selectProductIngredients(
    request: Request,
    response: Response,
  ) {
    const pwAuth = getPwAuthToken(request);
    if (!pwAuth) {
      response.json(JSON.stringify({ status: 401 }));
      return;
    }
    const hy = (request.query.harvest_year ?? '0') as string
    const iid = (request.query.ingredient_id ?? '0') as string
    const res = await new ProductIngredientService().selectProductIngredients(pwAuth, hy, iid);
    response.json(JSON.stringify(res));
  }
  static async selectProductIngredients_includeSemifinished(
    request: Request,
    response: Response,
  ) {
    const pwAuth = getPwAuthToken(request);
    if (!pwAuth) {
      response.json(JSON.stringify({ status: 401 }));
      return;
    }
    const si = (request.query.semifinished_id ?? '0') as string
    const res = await new ProductIngredientService().selectProductIngredients_includeSemifinished(pwAuth, si);
    response.json(JSON.stringify(res));
  }
  static async insertProductIngredient(
    request: Request,
    response: Response,
  ) {
    const pwAuth = getPwAuthToken(request);
    if (!pwAuth) {
      response.json(JSON.stringify({ status: 401 }));
      return;
    }
    const res = await new ProductIngredientService().insertProductIngredient(
      pwAuth,
      request.body
    );
    response.json(JSON.stringify(res));
  }
}
