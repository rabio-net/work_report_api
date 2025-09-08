import { Request, Response, NextFunction } from 'express';
import { getPwAuthToken } from '../middlewares/token';
import IngredientClassificationService from '../services/ingredientClassificationService';

export default class IngredientClassificationController {
  static async selectIngredientClassifications(
    request: Request,
    response: Response,
  ) {
    const pwAuth = getPwAuthToken(request);
    if (!pwAuth) {
      response.json(JSON.stringify({ status: 401 }));
      return;
    }
    const res = await new IngredientClassificationService().selectIngredientClassifications(pwAuth);
    response.json(JSON.stringify(res));
  }
}
