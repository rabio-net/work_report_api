import { Request, Response, NextFunction } from 'express';
import { getPwAuthToken } from '../middlewares/token';
import PackingStyleService from '../services/packingStyleService';

export default class PackingStyleController {
  static async selectPackingStyles(
    request: Request,
    response: Response,
  ) {
    const pwAuth = getPwAuthToken(request);
    if (!pwAuth) {
      response.json(JSON.stringify({ status: 401 }));
      return;
    }
    const res = await new PackingStyleService().selectPackingStyles(pwAuth);
    response.json(JSON.stringify(res));
  }
}
