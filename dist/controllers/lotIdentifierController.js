"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const token_1 = require("../middlewares/token");
const lotIdentifierService_1 = __importDefault(require("../services/lotIdentifierService"));
class LotIdentifierController {
    static async selectLotIdentifiers(request, response) {
        const pwAuth = (0, token_1.getPwAuthToken)(request);
        if (!pwAuth) {
            response.json(JSON.stringify({ status: 401 }));
            return;
        }
        const iid = (request.query.ingredient_id ?? '0');
        const psid = (request.query.product_standard_id ?? '0');
        const res = await new lotIdentifierService_1.default().selectLotIdentifiers(pwAuth, iid, psid);
        response.json(JSON.stringify(res));
    }
    static async insertLotIdentifier(request, response) {
        const pwAuth = (0, token_1.getPwAuthToken)(request);
        if (!pwAuth) {
            response.json(JSON.stringify({ status: 401 }));
            return;
        }
        const res = await new lotIdentifierService_1.default().insertLotIdentifier(pwAuth, request.body);
        response.json(JSON.stringify(res));
    }
}
exports.default = LotIdentifierController;
//# sourceMappingURL=lotIdentifierController.js.map