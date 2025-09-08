"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const token_1 = require("../middlewares/token");
const ingredientStoringService_1 = __importDefault(require("../services/ingredientStoringService"));
class IngredientStoringController {
    static async selectIngredientStoring(request, response) {
        const pwAuth = (0, token_1.getPwAuthToken)(request);
        if (!pwAuth) {
            response.json(JSON.stringify({ status: 401 }));
            return;
        }
        if (!request.query.id) {
            response.json(JSON.stringify({ status: 400 }));
            return;
        }
        const res = await new ingredientStoringService_1.default().selectIngredientStoring(pwAuth, request.query.id);
        response.json(JSON.stringify(res));
    }
}
exports.default = IngredientStoringController;
//# sourceMappingURL=ingredientStoringController.js.map