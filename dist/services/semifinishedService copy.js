"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const config_1 = require("../kintone/config");
class ProductService {
    async selectSemifinisheds(pwAuth, harvestYear, ingredientId) {
        try {
            const param = encodeURI(`?app=${config_1.appId.semifinished}&query=harvest_year = ${harvestYear} and ingredient_id = ${ingredientId} order by record_no desc
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
            console.error('selectSemifinisheds error:', error.response ? error.response.data : error.message);
            return { status: error.status ?? 500 };
        }
    }
    async selectSemifinished(pwAuth, id) {
        try {
            const param = encodeURI(`?app=${config_1.appId.semifinished}&id=${id}`);
            const res = await axios_1.default.get(config_1.url.record + param, {
                headers: {
                    'X-Cybozu-Authorization': pwAuth,
                },
            });
            console.log('res', res.status, res.data);
            return { status: res.status, data: res.data.record };
        }
        catch (error) {
            console.error('selectSemifinished error:', error.response ? error.response.data : error.message);
            return { status: error.status ?? 500 };
        }
    }
    async insertSemifinished(pwAuth, body) {
        console.log('insertSemifinished', body);
        try {
            const res = await axios_1.default.post(config_1.url.record, {
                ...body,
                app: config_1.appId.semifinished,
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
            console.error('insertSemifinished error:', error.response ? error.response.data : error.message);
            console.error('error.response', error.response);
            return { status: error.status ?? 500 };
        }
    }
    async updateSemifinished(pwAuth, body) {
        try {
            const res = await axios_1.default.put(config_1.url.record, {
                ...body,
                app: config_1.appId.semifinished,
            }, {
                headers: {
                    'X-Cybozu-Authorization': pwAuth,
                    'Content-Type': 'application/json',
                },
            });
            console.log('res', res.status, res.data);
            return { status: res.status, data: res.data.record };
        }
        catch (error) {
            console.error('updateSemifinished error:', error.response ? error.response.data : error.message);
            return { status: error.status ?? 500 };
        }
    }
}
exports.default = ProductService;
//# sourceMappingURL=semifinishedService%20copy.js.map