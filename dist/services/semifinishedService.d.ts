export default class SemifinishedService {
    selectSemifinisheds(pwAuth: string, harvestYear: string, ingredientId: string): Promise<{
        status: number;
        data: any;
    } | {
        status: any;
        data?: never;
    }>;
    selectSemifinished(pwAuth: string, id: string): Promise<{
        status: number;
        data: any;
    } | {
        status: any;
        data?: never;
    }>;
    insertSemifinished(pwAuth: string, body: object): Promise<{
        status: number;
        data: any;
    } | {
        status: any;
        data?: never;
    }>;
    updateSemifinished(pwAuth: string, body: object): Promise<{
        status: number;
        data: any;
    } | {
        status: any;
        data?: never;
    }>;
}
//# sourceMappingURL=semifinishedService.d.ts.map