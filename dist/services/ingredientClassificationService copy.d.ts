export default class DrawerService {
    getIngredientClassificationAll(pwAuth: string): Promise<{
        status: number;
        data: any;
    } | {
        status: number;
        data?: never;
    }>;
    logout(): Promise<void>;
}
//# sourceMappingURL=ingredientClassificationService%20copy.d.ts.map