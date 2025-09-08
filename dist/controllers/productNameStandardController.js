"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const token_1 = require("../middlewares/token");
const productNameStandardService_1 = __importDefault(require("../services/productNameStandardService"));
class ProductNameStandardController {
    static async selectProductNameStandards(request, response) {
        const pwAuth = (0, token_1.getPwAuthToken)(request);
        if (!pwAuth) {
            response.json(JSON.stringify({ status: 401 }));
            return;
        }
        const icid = (request.query.ingredient_classification_id ?? '');
        const iid = (request.query.ingredient_id ?? '');
        const psid = (request.query.product_standard_id ?? '');
        const pzid = (request.query.product_size_id ?? '');
        const pid = (request.query.process_id ?? '');
        const pdid = (request.query.process_standard_id ?? '');
        const res = await new productNameStandardService_1.default()
            .selectProductNameStandards(pwAuth, [icid, iid, psid, pzid, pid, pdid]);
        response.json(JSON.stringify(res));
    }
}
exports.default = ProductNameStandardController;
//# sourceMappingURL=productNameStandardController.js.map