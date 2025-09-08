import { Request, Response, NextFunction } from 'express';
import { getPwAuthToken } from '../middlewares/token';
import ProcessService from '../services/processService';

export default class ProcessController {
  static async selectProcesses(
    request: Request,
    response: Response,
  ) {
    const pwAuth = getPwAuthToken(request);
    if (!pwAuth) {
      response.json(JSON.stringify({ status: 401 }));
      return;
    }
    const res = await new ProcessService().selectProcesses(pwAuth);
    response.json(JSON.stringify(res));
  }
}
