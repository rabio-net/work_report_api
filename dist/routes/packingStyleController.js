"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const token_1 = require("../middlewares/token");
const productStandardService_1 = __importDefault(require("../services/productStandardService"));
class ProductStandardController {
    static async getProductStandard(request, response) {
        const pwAuth = (0, token_1.getPwAuthToken)(request);
        if (!pwAuth) {
            response.json(JSON.stringify({ status: 401 }));
            return;
        }
        console.log('request.query', request.query);
        console.log('request.query.ingredient_classification_id', request.query.ingredient_classification_id);
        const icid = (request.query.ingredient_classification_id ?? '0');
        console.log('icid', icid);
        const res = await new productStandardService_1.default().getProductStandard(pwAuth, icid);
        response.json(JSON.stringify(res));
    }
}
exports.default = ProductStandardController;
//# sourceMappingURL=packingStyleController.js.map