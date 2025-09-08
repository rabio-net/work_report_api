"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const config_1 = require("../kintone/config");
class ProductStandardService {
    async selectProductStandards(pwAuth, ingredientClassificationId) {
        try {
            const param = encodeURI(`?app=${config_1.appId.product_standard}&fields[0]=record_no&fields[1]=name&query=ingredient_classification_id = ${ingredientClassificationId} order by display_order asc, record_no asc
        `);
            const res = await axios_1.default.get(config_1.url.records + param, {
                headers: {
                    'X-Cybozu-Authorization': pwAuth,
                },
            });
            console.log('res', res.status, res.data);
            return { status: res.status, data: res.data.records };
        }
        catch (error) {
            console.error('selectProductStandards error:', error.response ? error.response.data : error.message);
            return { status: error.status ?? 500 };
        }
    }
}
exports.default = ProductStandardService;
//# sourceMappingURL=productStandardService%20copy.js.map