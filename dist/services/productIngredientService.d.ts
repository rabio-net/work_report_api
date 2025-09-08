export default class ProductIngredientService {
    selectProductIngredients(pwAuth: string, harvestYear: string, ingredientId: string): Promise<{
        status: number;
        data: any;
    } | {
        status: any;
        data?: never;
    }>;
    selectProductIngredients_includeSemifinished(pwAuth: string, semifinishedId: string): Promise<{
        status: number;
        data: any;
    } | {
        status: any;
        data?: never;
    }>;
    insertProductIngredient(pwAuth: string, body: object): Promise<{
        status: number;
        data: any;
    } | {
        status: any;
        data?: never;
    }>;
}
//# sourceMappingURL=productIngredientService.d.ts.map