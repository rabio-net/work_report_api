export default class ProductSizeService {
    selectProductSizes(pwAuth: string): Promise<{
        status: number;
        data: any;
    } | {
        status: any;
        data?: never;
    }>;
}
//# sourceMappingURL=productSizeService.d.ts.map