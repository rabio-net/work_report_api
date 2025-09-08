import { Request, Response, NextFunction } from 'express';
import { getPwAuthToken } from '../middlewares/token';
import LotIdentifierService from '../services/lotIdentifierService';

export default class LotIdentifierController {
  static async selectLotIdentifiers(
    request: Request,
    response: Response,
  ) {
    const pwAuth = getPwAuthToken(request);
    if (!pwAuth) {
      response.json(JSON.stringify({ status: 401 }));
      return;
    }
    const iid = (request.query.ingredient_id ?? '0') as string
    const psid = (request.query.product_standard_id ?? '0') as string
    const res = await new LotIdentifierService().selectLotIdentifiers(pwAuth, iid, psid);
    response.json(JSON.stringify(res));
  }
  static async insertLotIdentifier(
    request: Request,
    response: Response,
  ) {
    const pwAuth = getPwAuthToken(request);
    if (!pwAuth) {
      response.json(JSON.stringify({ status: 401 }));
      return;
    }
    const res = await new LotIdentifierService().insertLotIdentifier(
      pwAuth,
      request.body
    );
    response.json(JSON.stringify(res));
  }
}
