import { Request, Response } from 'express';
export default class ProductController {
    static selectProducts(request: Request, response: Response): Promise<void>;
    static selectProduct(request: Request, response: Response): Promise<void>;
    static insertProduct(request: Request, response: Response): Promise<void>;
    static updateProduct(request: Request, response: Response): Promise<void>;
}
//# sourceMappingURL=productController.d.ts.map