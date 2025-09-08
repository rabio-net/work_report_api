"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const authService_1 = __importDefault(require("../services/authService"));
class AuthController {
    static async login(request, response) {
        try {
            const { username, password } = request.body;
            const res = await new authService_1.default().login(username, password);
            console.log('res', res);
            response.json(JSON.stringify({
                status: res.status,
                data: {
                    user: res.user,
                    token: res.token,
                },
            }));
        }
        catch (e) {
            response.json(JSON.stringify({
                status: 401,
            }));
        }
    }
}
exports.default = AuthController;
//# sourceMappingURL=authController.js.map