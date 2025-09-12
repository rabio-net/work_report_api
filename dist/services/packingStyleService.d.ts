export default class PackingStyleService {
    selectPackingStyles(pwAuth: string): Promise<{
        status: number;
        data: any;
    } | {
        status: any;
        data?: never;
    }>;
}
//# sourceMappingURL=packingStyleService.d.ts.map