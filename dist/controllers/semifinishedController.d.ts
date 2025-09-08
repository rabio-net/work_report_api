import { Request, Response } from 'express';
export default class SemifinishedController {
    static selectSemifinisheds(request: Request, response: Response): Promise<void>;
    static selectSemifinished(request: Request, response: Response): Promise<void>;
    static insertSemifinished(request: Request, response: Response): Promise<void>;
    static updateSemifinished(request: Request, response: Response): Promise<void>;
}
//# sourceMappingURL=semifinishedController.d.ts.map