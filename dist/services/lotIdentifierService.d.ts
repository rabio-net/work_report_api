export default class LotIdentifierService {
    selectLotIdentifiers(pwAuth: string, ingredientId: string, productStandardId: string): Promise<{
        status: number;
        data: any;
    } | {
        status: any;
        data?: never;
    }>;
    insertLotIdentifier(pwAuth: string, body: object): Promise<{
        status: number;
        data: any;
    } | {
        status: any;
        data?: never;
    }>;
}
//# sourceMappingURL=lotIdentifierService.d.ts.map