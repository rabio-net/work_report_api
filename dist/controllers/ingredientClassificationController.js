"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const token_1 = require("../middlewares/token");
const ingredientClassificationService_1 = __importDefault(require("../services/ingredientClassificationService"));
class IngredientClassificationController {
    static async selectIngredientClassifications(request, response) {
        const pwAuth = (0, token_1.getPwAuthToken)(request);
        if (!pwAuth) {
            response.json(JSON.stringify({ status: 401 }));
            return;
        }
        const res = await new ingredientClassificationService_1.default().selectIngredientClassifications(pwAuth);
        response.json(JSON.stringify(res));
    }
}
exports.default = IngredientClassificationController;
//# sourceMappingURL=ingredientClassificationController.js.map