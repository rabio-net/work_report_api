"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const token_1 = require("../middlewares/token");
const processStandardService_1 = __importDefault(require("../services/processStandardService"));
class ProcessStandardController {
    static async selectProcessStandards(request, response) {
        const pwAuth = (0, token_1.getPwAuthToken)(request);
        if (!pwAuth) {
            response.json(JSON.stringify({ status: 401 }));
            return;
        }
        const res = await new processStandardService_1.default().selectProcessStandards(pwAuth);
        response.json(JSON.stringify(res));
    }
}
exports.default = ProcessStandardController;
//# sourceMappingURL=processStandardController.js.map