import { Request, Response } from 'express';
export default class SemifinishedIngredientController {
    static selectSemifinishedIngredients(request: Request, response: Response): Promise<void>;
    static selectSemifinishedIngredients_includeSemifinished(request: Request, response: Response): Promise<void>;
    static selectSemifinishedIngredients_includeIngredientStoring(request: Request, response: Response): Promise<void>;
    static insertSemifinishedIngredient(request: Request, response: Response): Promise<void>;
}
//# sourceMappingURL=semifinishedIngredientController.d.ts.map