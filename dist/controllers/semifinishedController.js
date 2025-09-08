"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const token_1 = require("../middlewares/token");
const semifinishedService_1 = __importDefault(require("../services/semifinishedService"));
class SemifinishedController {
    static async selectSemifinisheds(request, response) {
        const pwAuth = (0, token_1.getPwAuthToken)(request);
        if (!pwAuth) {
            response.json(JSON.stringify({ status: 401 }));
            return;
        }
        const hy = (request.query.harvest_year ?? '0');
        const iid = (request.query.ingredient_id ?? '0');
        const res = await new semifinishedService_1.default().selectSemifinisheds(pwAuth, hy, iid);
        response.json(JSON.stringify(res));
    }
    static async selectSemifinished(request, response) {
        const pwAuth = (0, token_1.getPwAuthToken)(request);
        if (!pwAuth) {
            response.json(JSON.stringify({ status: 401 }));
            return;
        }
        if (!request.query.id) {
            response.json(JSON.stringify({ status: 400 }));
            return;
        }
        const res = await new semifinishedService_1.default().selectSemifinished(pwAuth, request.query.id);
        response.json(JSON.stringify(res));
    }
    static async insertSemifinished(request, response) {
        console.log('insertSemifinished');
        const pwAuth = (0, token_1.getPwAuthToken)(request);
        if (!pwAuth) {
            response.json(JSON.stringify({ status: 401 }));
            return;
        }
        const res = await new semifinishedService_1.default().insertSemifinished(pwAuth, request.body);
        response.json(JSON.stringify(res));
    }
    static async updateSemifinished(request, response) {
        const pwAuth = (0, token_1.getPwAuthToken)(request);
        if (!pwAuth) {
            response.json(JSON.stringify({ status: 401 }));
            return;
        }
        const res = await new semifinishedService_1.default().updateSemifinished(pwAuth, request.body);
        response.json(JSON.stringify(res));
    }
}
exports.default = SemifinishedController;
//# sourceMappingURL=semifinishedController.js.map