export default class ProcessService {
    selectProcesses(pwAuth: string): Promise<{
        status: number;
        data: any;
    } | {
        status: any;
        data?: never;
    }>;
}
//# sourceMappingURL=processService.d.ts.map