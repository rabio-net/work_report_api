import { Request, Response, NextFunction } from "express";
import AuthService from '../services/authService';

export default class AuthController {
  static async login(
    request: Request<any, any, { username: string; password: string }>,
    response: Response<string>,
  ) {
    try {
      const { username, password } = request.body;
      const res = await new AuthService().login(username, password);
      console.log('res', res);
      response.json(JSON.stringify(
        {
          status: res.status,
          data: {
            user: res.user,
            token: res.token,
          },
        }
      ));
    } catch (e) {
      response.json(JSON.stringify(
        {
          status: 401,
        }
      ));
    }
  }
}
