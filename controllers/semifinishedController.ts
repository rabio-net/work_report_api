import { Request, Response, NextFunction } from 'express';
import { getPwAuthToken } from '../middlewares/token';
import SemifinishedService from '../services/semifinishedService';

export default class SemifinishedController {
  static async selectSemifinisheds(
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
    const res = await new SemifinishedService().selectSemifinisheds(pwAuth, hy, iid);
    response.json(JSON.stringify(res));
  }
  static async selectSemifinished(
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
    const res = await new SemifinishedService().selectSemifinished(
      pwAuth,
      request.query.id as string
    );
    response.json(JSON.stringify(res));
  }
  static async insertSemifinished(
    request: Request,
    response: Response,
  ) {
    console.log('insertSemifinished')
    const pwAuth = getPwAuthToken(request);
    if (!pwAuth) {
      response.json(JSON.stringify({ status: 401 }));
      return;
    }
    const res = await new SemifinishedService().insertSemifinished(
      pwAuth,
      request.body
    );
    response.json(JSON.stringify(res));
  }
  static async updateSemifinished(
    request: Request,
    response: Response,
  ) {
    const pwAuth = getPwAuthToken(request);
    if (!pwAuth) {
      response.json(JSON.stringify({ status: 401 }));
      return;
    }
    const res = await new SemifinishedService().updateSemifinished(
      pwAuth,
      request.body
    );
    response.json(JSON.stringify(res));
  }
}
