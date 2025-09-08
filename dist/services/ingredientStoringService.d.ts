export default class IngredientStoringService {
    selectIngredientStoring(pwAuth: string, id: string): Promise<{
        status: number;
        data: any;
    } | {
        status: any;
        data?: never;
    }>;
}
//# sourceMappingURL=ingredientStoringService.d.ts.map