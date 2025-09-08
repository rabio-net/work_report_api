"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const authService_1 = __importDefault(require("../services/authService"));
class AuthController {
    static async login(request, response, next) {
        try {
            const { username, password } = request.body;
            const res = await new authService_1.default().login(username, password);
            console.log('res', res);
            response.json(JSON.stringify({
                status: res.status,
                data: {
                    user: res.user,
                    token: res.token,
                },
            }));
        }
        catch (e) {
            //next(e);
            response.json(JSON.stringify({
                status: 401,
            }));
        }
    }
}
exports.default = AuthController;
/*
import { NextFunction, Request, Response } from "express";
import * as bcrypt from "bcrypt";
import { sign } from "jsonwebtoken";

export class AuthsController {
  static async login(
    request: Request<any, any, { email: string; password: string }>,
    response: Response<string>,
    next: NextFunction,
  ): Promise<void> {
    try {
      const { email, password } = request.body;
      const loggingInUser = await UserRepository.findOne({
        where: {
          email,
        },
      });
      if (!loggingInUser) throw new Error();

      const isPasswordCorrect = await bcrypt.compare(password, loggingInUser.password);
      if (!isPasswordCorrect) throw new Error();

      const jwtPayload = {
        id: loggingInUser.id,
      };
      const token = sign(jwtPayload, "JWT_SECRET_KEY", {
        expiresIn: "1h",
      });
      response.cookie("token", token, {
        httpOnly: true,
        secure: true,
      });
      response.send(loggingInUser.id);

    } catch {
      response.status(401).send("Login failed!🥹");

    }
  }
}
*/ 
//# sourceMappingURL=authController%20copy.js.map