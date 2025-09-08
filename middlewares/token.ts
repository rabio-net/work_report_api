import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';
import { jwtDecode } from 'jwt-decode';
require('dotenv').config();

const getToken = (request: Request) => {
  const hds = request?.headers?.authorization?.split('Token ');
  return (hds && hds.length > 1) ? hds[1] : undefined;
}

export const verifyAccessToken = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    const token = getToken(request);
    if (!token) {
      response.status(401).send('Token must be provided!');
      return;
    }
    const decodedToken = verify(token, process.env.JWT_SECRET_KEY ?? '');
    next();
  } catch {
    response.status(401).send('Authorization failed!');
  }
};

export const getPwAuthToken = (
  request: Request,
) => {
  try {
    const token = getToken(request);
    if (!token) return undefined;
    const decoded = jwtDecode(token) as { [ key: string ]: string | number };
    return decoded.code as string;
  } catch {
    return undefined;
  }
};
