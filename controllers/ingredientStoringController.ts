import { Request, Response, NextFunction } from 'express';
import { getPwAuthToken } from '../middlewares/token';
import IngredientStoringService from '../services/ingredientStoringService';

export default class IngredientStoringController {
  static async selectIngredientStoring(
    request: Request,
    response: Response,
  ) {
    const pwAuth = getPwAuthToken(request);
    if (!pwAuth) {
      response.json(JSON.stringify({ status: 401 }));
      return;
    }
    if (!request.query.id) {
      response.json(JSON.stringify({ status: 400 }));
      return;
    }
    const res = await new IngredientStoringService().selectIngredientStoring(
      pwAuth,
      request.query.id as string
    );
    response.json(JSON.stringify(res));
  }
}
