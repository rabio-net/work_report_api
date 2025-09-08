export default class ProductService {
    selectProducts(pwAuth: string, harvestYear: string, ingredientId: string): Promise<{
        status: number;
        data: any;
    } | {
        status: any;
        data?: never;
    }>;
    selectProduct(pwAuth: string, id: string): Promise<{
        status: number;
        data: any;
    } | {
        status: any;
        data?: never;
    }>;
    insertProduct(pwAuth: string, body: object): Promise<{
        status: number;
        data: any;
    } | {
        status: any;
        data?: never;
    }>;
    updateProduct(pwAuth: string, body: object): Promise<{
        status: number;
        data: any;
    } | {
        status: any;
        data?: never;
    }>;
}
//# sourceMappingURL=productService.d.ts.map