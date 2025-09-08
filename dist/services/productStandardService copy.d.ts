export default class ProductStandardService {
    selectProductStandards(pwAuth: string, ingredientClassificationId: string): Promise<{
        status: number;
        data: any;
    } | {
        status: any;
        data?: never;
    }>;
}
//# sourceMappingURL=productStandardService%20copy.d.ts.map