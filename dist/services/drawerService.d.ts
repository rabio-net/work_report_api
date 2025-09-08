export default class DrawerService {
    getIngredientClassification(pwAuth: string): Promise<{
        status: number;
        data: any;
    } | {
        status: number;
        data?: never;
    }>;
    logout(): Promise<void>;
}
//# sourceMappingURL=drawerService.d.ts.map