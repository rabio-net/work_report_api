"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const token_1 = require("../middlewares/token");
const productService_1 = __importDefault(require("../services/productService"));
class ProductController {
    static async selectProducts(request, response) {
        const pwAuth = (0, token_1.getPwAuthToken)(request);
        if (!pwAuth) {
            response.json(JSON.stringify({ status: 401 }));
            return;
        }
        const hy = (request.query.harvest_year ?? '0');
        const iid = (request.query.ingredient_id ?? '0');
        const res = await new productService_1.default().selectProducts(pwAuth, hy, iid);
        response.json(JSON.stringify(res));
    }
    static async selectProduct(request, response) {
        const pwAuth = (0, token_1.getPwAuthToken)(request);
        if (!pwAuth) {
            response.json(JSON.stringify({ status: 401 }));
            return;
        }
        if (!request.query.id) {
            response.json(JSON.stringify({ status: 400 }));
            return;
        }
        const res = await new productService_1.default().selectProduct(pwAuth, request.query.id);
        response.json(JSON.stringify(res));
    }
    static async insertProduct(request, response) {
        const pwAuth = (0, token_1.getPwAuthToken)(request);
        if (!pwAuth) {
            response.json(JSON.stringify({ status: 401 }));
            return;
        }
        if (!request.query.record) {
            response.json(JSON.stringify({ status: 400 }));
            return;
        }
        const res = await new productService_1.default().insertProduct(pwAuth, request.body);
        response.json(JSON.stringify(res));
    }
    static async updateProduct(request, response) {
        const pwAuth = (0, token_1.getPwAuthToken)(request);
        if (!pwAuth) {
            response.json(JSON.stringify({ status: 401 }));
            return;
        }
        const res = await new productService_1.default().updateProduct(pwAuth, request.body);
        response.json(JSON.stringify(res));
    }
}
exports.default = ProductController;
//# sourceMappingURL=productController%20copy.js.map