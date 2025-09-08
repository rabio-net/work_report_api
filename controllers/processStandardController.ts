import { Request, Response, NextFunction } from 'express';
import { getPwAuthToken } from '../middlewares/token';
import ProcessStandardService from '../services/processStandardService';

export default class ProcessStandardController {
  static async selectProcessStandards(
    request: Request,
    response: Response,
  ) {
    const pwAuth = getPwAuthToken(request);
    if (!pwAuth) {
      response.json(JSON.stringify({ status: 401 }));
      return;
    }
    const res = await new ProcessStandardService().selectProcessStandards(pwAuth);
    response.json(JSON.stringify(res));
  }
}
