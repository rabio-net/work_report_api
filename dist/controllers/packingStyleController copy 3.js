"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const token_1 = require("../middlewares/token");
const packingStyleService_1 = __importDefault(require("../services/packingStyleService"));
class PackingStyleController {
    static async selectPackingStyles(request, response) {
        const pwAuth = (0, token_1.getPwAuthToken)(request);
        if (!pwAuth) {
            response.json(JSON.stringify({ status: 401 }));
            return;
        }
        const res = await new packingStyleService_1.default().selectPackingStyles(pwAuth);
        response.json(JSON.stringify(res));
    }
}
exports.default = PackingStyleController;
//# sourceMappingURL=packingStyleController%20copy%203.js.map