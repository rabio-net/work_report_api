"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const config_1 = require("../kintone/config");
class LotIdentifierService {
    async selectLotIdentifiers(pwAuth, ingredientId, productStandardId) {
        try {
            const param = encodeURI(`?app=${config_1.appId.lot_identifier}&query=ingredient_id = ${ingredientId} and product_standard_id = ${productStandardId} order by record_no desc limit 1
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
            console.error('selectLotIdentifiers error:', error.response ? error.response.data : error.message);
            return { status: error.status ?? 500 };
        }
    }
    async insertLotIdentifier(pwAuth, body) {
        console.log('insertLotIdentifier body', body);
        try {
            const res = await axios_1.default.post(config_1.url.record, {
                ...body,
                app: config_1.appId.lot_identifier,
            }, {
                headers: {
                    'X-Cybozu-Authorization': pwAuth,
                    'Content-Type': 'application/json',
                },
            });
            console.log('res', res.status, res.data);
            return { status: res.status, data: res.data };
        }
        catch (error) {
            console.error('insertLotIdentifier error:', error.response ? error.response.data : error.message);
            console.error('error.response', error.response);
            return { status: error.status ?? 500 };
        }
    }
}
exports.default = LotIdentifierService;
//# sourceMappingURL=lotIdentifierService.js.map