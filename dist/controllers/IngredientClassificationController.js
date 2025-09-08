"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const token_1 = require("../middlewares/token");
const drawerService_1 = __importDefault(require("../services/drawerService"));
class DrawerController {
    static async getIngredientClassification(request, response) {
        const pwAuth = (0, token_1.getPwAuthToken)(request);
        if (!pwAuth) {
            response.json(JSON.stringify({ status: 401 }));
            return;
        }
        const res = await new drawerService_1.default().getIngredientClassification(pwAuth);
        response.json(JSON.stringify(res));
    }
}
exports.default = DrawerController;
//# sourceMappingURL=IngredientClassificationController.js.map