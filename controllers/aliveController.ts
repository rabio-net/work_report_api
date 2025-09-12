import { Request, Response, NextFunction } from "express";

export default class AliveController {
  static async alive(
    request: Request,
    response: Response<string>,
  ) {
    try {
      response.json(JSON.stringify(
        {
          status: 200,
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
