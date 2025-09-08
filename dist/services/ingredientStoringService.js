"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const config_1 = require("../kintone/config");
class IngredientStoringService {
    async selectIngredientStoring(pwAuth, id) {
        try {
            const param = encodeURI(`?app=${config_1.appId.ingredient_storing}&id=${id}`);
            const res = await axios_1.default.get(config_1.url.record + param, {
                headers: {
                    'X-Cybozu-Authorization': pwAuth,
                },
            });
            console.log('res', res.status, res.data);
            return { status: res.status, data: res.data.record };
        }
        catch (error) {
            console.error('selectIngredientStoring error:', error.response ? error.response.data : error.message);
            return { status: error.status ?? 500 };
        }
    }
}
exports.default = IngredientStoringService;
//# sourceMappingURL=ingredientStoringService.js.map