export default class ProductIngredientService {
    selectProductIngredients(pwAuth: string, harvestYear: string, ingredientId: string): Promise<{
        status: number;
        data: any;
    } | {
        status: any;
        data?: never;
    }>;
}
//# sourceMappingURL=productIngredientService%20copy.d.ts.map