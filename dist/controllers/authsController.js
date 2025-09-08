"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
//# sourceMappingURL=authsController.js.map