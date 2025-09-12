"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const config_1 = require("../kintone/config");
class ProductIngredientService {
    async selectProductIngredients(pwAuth, harvestYear, ingredientId) {
        try {
            const param = encodeURI(`?app=${config_1.appId.product_ingredient}&query=harvest_year = ${harvestYear} and ingredient_id = ${ingredientId} order by record_no desc
        `);
            const res = await axios_1.default.get(config_1.url.records + param, {
                headers: {
                    'X-Cybozu-Authorization': pwAuth,
                },
            });
            return { status: res.status, data: res.data.records };
        }
        catch (error) {
            console.error('selectProductIngredients error:', error.response ? error.response.data : error.message);
            return { status: error.status ?? 500 };
        }
    }
    async selectProductIngredients_includeSemifinished(pwAuth, semifinishedId) {
        try {
            const param = encodeURI(`?app=${config_1.appId.product_ingredient}&fields[0]=record_no&query=semifinished_id in (${semifinishedId}) order by record_no desc limit 1
        `);
            const res = await axios_1.default.get(config_1.url.records + param, {
                headers: {
                    'X-Cybozu-Authorization': pwAuth,
                },
            });
            return { status: res.status, data: res.data.records };
        }
        catch (error) {
            console.error('selectProductIngredients error:', error.response ? error.response.data : error.message);
            return { status: error.status ?? 500 };
        }
    }
    async insertProductIngredient(pwAuth, body) {
        try {
            const res = await axios_1.default.post(config_1.url.record, {
                ...body,
                app: config_1.appId.product_ingredient,
            }, {
                headers: {
                    'X-Cybozu-Authorization': pwAuth,
                    'Content-Type': 'application/json',
                },
            });
            return { status: res.status, data: res.data };
        }
        catch (error) {
            console.error('insertProductIngredient error:', error.response ? error.response.data : error.message);
            return { status: error.status ?? 500 };
        }
    }
}
exports.default = ProductIngredientService;
//# sourceMappingURL=productIngredientService.js.map