import { Request, Response, NextFunction } from 'express';
import { getPwAuthToken } from '../middlewares/token';
import ProductService from '../services/productService';

export default class ProductController {
  static async selectProducts(
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
    const res = await new ProductService().selectProducts(pwAuth, hy, iid);
    response.json(JSON.stringify(res));
  }
  static async selectProduct(
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
    const res = await new ProductService().selectProduct(
      pwAuth,
      request.query.id as string
    );
    response.json(JSON.stringify(res));
  }
  static async insertProduct(
    request: Request,
    response: Response,
  ) {
    const pwAuth = getPwAuthToken(request);
    if (!pwAuth) {
      response.json(JSON.stringify({ status: 401 }));
      return;
    }
    const res = await new ProductService().insertProduct(
      pwAuth,
      request.body
    );
    response.json(JSON.stringify(res));
  }
  static async updateProduct(
    request: Request,
    response: Response,
  ) {
    const pwAuth = getPwAuthToken(request);
    if (!pwAuth) {
      response.json(JSON.stringify({ status: 401 }));
      return;
    }
    const res = await new ProductService().updateProduct(
      pwAuth,
      request.body
    );
    response.json(JSON.stringify(res));
  }
}
