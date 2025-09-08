/*
import { JwtPayload } from "@/types/auths";
import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

export const authCheck = (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  try {
    const { token } = request.cookies;
    if (!token) throw new Error();
    const { id } = verify(token, "JWT_SECRET_KEY") as JwtPayload;
    request.loggedInUserId = id;
    next();
  } catch {
    request.loggingInUserId = "";
    response.clearCookie("token");
    response.status(401).send("Authentication failed!🥹");
  }
};
*/