export default class ProcessStandardService {
    selectProcessStandards(pwAuth: string): Promise<{
        status: number;
        data: any;
    } | {
        status: any;
        data?: never;
    }>;
}
//# sourceMappingURL=processStandardService.d.ts.map