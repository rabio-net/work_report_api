"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const token_1 = require("../middlewares/token");
const productStandardService_1 = __importDefault(require("../services/productStandardService"));
class ProductStandardController {
    static async selectProductStandards(request, response) {
        const pwAuth = (0, token_1.getPwAuthToken)(request);
        if (!pwAuth) {
            response.json(JSON.stringify({ status: 401 }));
            return;
        }
        const icid = (request.query.ingredient_classification_id ?? '0');
        const res = await new productStandardService_1.default().selectProductStandards(pwAuth, icid);
        response.json(JSON.stringify(res));
    }
}
exports.default = ProductStandardController;
//# sourceMappingURL=productStandardController%20copy.js.map