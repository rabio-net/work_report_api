import { Request, Response, NextFunction } from 'express';
import { getPwAuthToken } from '../middlewares/token';
import SemifinishedIngredientService from '../services/semifinishedIngredientService';

export default class SemifinishedIngredientController {
  static async selectSemifinishedIngredients(
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
    const res = await new SemifinishedIngredientService().selectSemifinishedIngredients(pwAuth, hy, iid);
    response.json(JSON.stringify(res));
  }
  static async selectSemifinishedIngredients_includeSemifinished(
    request: Request,
    response: Response,
  ) {
    const pwAuth = getPwAuthToken(request);
    if (!pwAuth) {
      response.json(JSON.stringify({ status: 401 }));
      return;
    }
    const si = (request.query.semifinished_id ?? '0') as string
    const res = await new SemifinishedIngredientService().selectSemifinishedIngredients_includeSemifinished(pwAuth, si);
    response.json(JSON.stringify(res));
  }
  static async selectSemifinishedIngredients_includeIngredientStoring(
    request: Request,
    response: Response,
  ) {
    const pwAuth = getPwAuthToken(request);
    if (!pwAuth) {
      response.json(JSON.stringify({ status: 401 }));
      return;
    }
    const isi = (request.query.ingredient_storing_id ?? '0') as string
    const res = await new SemifinishedIngredientService().selectSemifinishedIngredients_includeIngredientStoring(pwAuth, isi);
    response.json(JSON.stringify(res));
  }
  static async insertSemifinishedIngredient(
    request: Request,
    response: Response,
  ) {
    const pwAuth = getPwAuthToken(request);
    if (!pwAuth) {
      response.json(JSON.stringify({ status: 401 }));
      return;
    }
    const res = await new SemifinishedIngredientService().insertSemifinishedIngredient(
      pwAuth,
      request.body
    );
    response.json(JSON.stringify(res));
  }
}
