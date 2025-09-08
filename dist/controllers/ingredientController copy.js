"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const token_1 = require("../middlewares/token");
const ingredientService_1 = __importDefault(require("../services/ingredientService"));
class IngredientController {
    static async selectIngredients(request, response) {
        const pwAuth = (0, token_1.getPwAuthToken)(request);
        if (!pwAuth) {
            response.json(JSON.stringify({ status: 401 }));
            return;
        }
        const res = await new ingredientService_1.default().selectIngredients(pwAuth);
        response.json(JSON.stringify(res));
    }
}
exports.default = IngredientController;
//# sourceMappingURL=ingredientController%20copy.js.map