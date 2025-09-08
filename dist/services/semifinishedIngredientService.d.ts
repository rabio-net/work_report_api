export default class ProductIngredientService {
    selectSemifinishedIngredients(pwAuth: string, harvestYear: string, ingredientId: string): Promise<{
        status: number;
        data: any;
    } | {
        status: any;
        data?: never;
    }>;
    selectSemifinishedIngredients_includeSemifinished(pwAuth: string, semifinishedId: string): Promise<{
        status: number;
        data: any;
    } | {
        status: any;
        data?: never;
    }>;
    selectSemifinishedIngredients_includeIngredientStoring(pwAuth: string, ingredientStoringId: string): Promise<{
        status: number;
        data: any;
    } | {
        status: any;
        data?: never;
    }>;
    insertSemifinishedIngredient(pwAuth: string, body: object): Promise<{
        status: number;
        data: any;
    } | {
        status: any;
        data?: never;
    }>;
}
//# sourceMappingURL=semifinishedIngredientService.d.ts.map