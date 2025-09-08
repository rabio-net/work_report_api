import { Request, Response, NextFunction } from 'express';
import { getPwAuthToken } from '../middlewares/token';
import IngredientService from '../services/ingredientService';

export default class IngredientController {
  static async selectIngredients(
    request: Request,
    response: Response,
  ) {
    const pwAuth = getPwAuthToken(request);
    if (!pwAuth) {
      response.json(JSON.stringify({ status: 401 }));
      return;
    }
    const res = await new IngredientService().selectIngredients(pwAuth);
    response.json(JSON.stringify(res));
  }
}
