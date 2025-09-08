export default class IngredientClassificationService {
    selectIngredientClassifications(pwAuth: string): Promise<{
        status: number;
        data: any;
    } | {
        status: any;
        data?: never;
    }>;
}
//# sourceMappingURL=ingredientClassificationService.d.ts.map