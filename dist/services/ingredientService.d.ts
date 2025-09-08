export default class IngredientService {
    selectIngredients(pwAuth: string): Promise<{
        status: number;
        data: any;
    } | {
        status: any;
        data?: never;
    }>;
}
//# sourceMappingURL=ingredientService.d.ts.map