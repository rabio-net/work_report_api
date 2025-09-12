import { Request, Response } from 'express';
export default class ProductIngredientController {
    static selectProductIngredients(request: Request, response: Response): Promise<void>;
    static selectProductIngredients_includeSemifinished(request: Request, response: Response): Promise<void>;
    static insertProductIngredient(request: Request, response: Response): Promise<void>;
}
//# sourceMappingURL=productIngredientController.d.ts.map