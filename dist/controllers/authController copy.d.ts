import { Request, Response, NextFunction } from "express";
export default class AuthController {
    static login(request: Request<any, any, {
        username: string;
        password: string;
    }>, response: Response<string>, next: NextFunction): Promise<void>;
}
//# sourceMappingURL=authController%20copy.d.ts.map