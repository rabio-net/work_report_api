"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const token_1 = require("../middlewares/token");
const semifinishedIngredientService_1 = __importDefault(require("../services/semifinishedIngredientService"));
class SemifinishedIngredientController {
    static async selectSemifinishedIngredients(request, response) {
        const pwAuth = (0, token_1.getPwAuthToken)(request);
        if (!pwAuth) {
            response.json(JSON.stringify({ status: 401 }));
            return;
        }
        const hy = (request.query.harvest_year ?? '0');
        const iid = (request.query.ingredient_id ?? '0');
        const res = await new semifinishedIngredientService_1.default().selectSemifinishedIngredients(pwAuth, hy, iid);
        response.json(JSON.stringify(res));
    }
    static async selectSemifinishedIngredients_includeSemifinished(request, response) {
        const pwAuth = (0, token_1.getPwAuthToken)(request);
        if (!pwAuth) {
            response.json(JSON.stringify({ status: 401 }));
            return;
        }
        const si = (request.query.semifinished_id ?? '0');
        const res = await new semifinishedIngredientService_1.default().selectSemifinishedIngredients_includeSemifinished(pwAuth, si);
        response.json(JSON.stringify(res));
    }
    static async selectSemifinishedIngredients_includeIngredientStoring(request, response) {
        const pwAuth = (0, token_1.getPwAuthToken)(request);
        if (!pwAuth) {
            response.json(JSON.stringify({ status: 401 }));
            return;
        }
        const isi = (request.query.ingredient_storing_id ?? '0');
        const res = await new semifinishedIngredientService_1.default().selectSemifinishedIngredients_includeIngredientStoring(pwAuth, isi);
        response.json(JSON.stringify(res));
    }
    static async insertSemifinishedIngredient(request, response) {
        const pwAuth = (0, token_1.getPwAuthToken)(request);
        if (!pwAuth) {
            response.json(JSON.stringify({ status: 401 }));
            return;
        }
        const res = await new semifinishedIngredientService_1.default().insertSemifinishedIngredient(pwAuth, request.body);
        response.json(JSON.stringify(res));
    }
}
exports.default = SemifinishedIngredientController;
//# sourceMappingURL=semifinishedIngredientController.js.map