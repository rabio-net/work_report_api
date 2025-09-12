"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const token_1 = require("../middlewares/token");
const productSizeService_1 = __importDefault(require("../services/productSizeService"));
class ProductSizeController {
    static async selectProductSizes(request, response) {
        const pwAuth = (0, token_1.getPwAuthToken)(request);
        if (!pwAuth) {
            response.json(JSON.stringify({ status: 401 }));
            return;
        }
        const res = await new productSizeService_1.default().selectProductSizes(pwAuth);
        response.json(JSON.stringify(res));
    }
}
exports.default = ProductSizeController;
//# sourceMappingURL=productSizeController.js.map