"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const token_1 = require("../middlewares/token");
const productIngredientService_1 = __importDefault(require("../services/productIngredientService"));
class ProductIngredientController {
    static async selectProductIngredients(request, response) {
        const pwAuth = (0, token_1.getPwAuthToken)(request);
        if (!pwAuth) {
            response.json(JSON.stringify({ status: 401 }));
            return;
        }
        const hy = (request.query.harvest_year ?? '0');
        const iid = (request.query.ingredient_id ?? '0');
        const res = await new productIngredientService_1.default().selectProductIngredients(pwAuth, hy, iid);
        response.json(JSON.stringify(res));
    }
    static async selectProductIngredients_includeSemifinished(request, response) {
        const pwAuth = (0, token_1.getPwAuthToken)(request);
        if (!pwAuth) {
            response.json(JSON.stringify({ status: 401 }));
            return;
        }
        const si = (request.query.semifinished_id ?? '0');
        const res = await new productIngredientService_1.default().selectProductIngredients_includeSemifinished(pwAuth, si);
        response.json(JSON.stringify(res));
    }
    static async insertProductIngredient(request, response) {
        const pwAuth = (0, token_1.getPwAuthToken)(request);
        if (!pwAuth) {
            response.json(JSON.stringify({ status: 401 }));
            return;
        }
        const res = await new productIngredientService_1.default().insertProductIngredient(pwAuth, request.body);
        response.json(JSON.stringify(res));
    }
}
exports.default = ProductIngredientController;
//# sourceMappingURL=productIngredientController.js.map