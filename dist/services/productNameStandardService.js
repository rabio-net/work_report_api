"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const config_1 = require("../kintone/config");
class ProductNameStandardService {
    async selectProductNameStandards(pwAuth, params) {
        let query = '';
        for (const i in params) {
            const val = params[i];
            if (!val)
                continue;
            if (query)
                query += ' and ';
            switch (i.toString()) {
                case '0':
                    query += `ingredient_classification_id = ${val}`;
                    break;
                case '1':
                    query += `(ingredient_id = ${val} or ingredient_id = "")`;
                    break;
                case '2':
                    query += `(product_standard_id = ${val} or product_standard_id = "")`;
                    break;
                case '3':
                    query += `(product_size_id = ${val} or product_size_id = "")`;
                    break;
                case '4':
                    query += `(process_id = ${val} or process_id = "")`;
                    break;
                case '5':
                    query += `(process_standard_id = ${val} or process_standard_id = "")`;
                    break;
            }
        }
        if (query)
            query = `${query} `;
        try {
            const param = encodeURI(`?app=${config_1.appId.product_name_standard}&query=${query}order by name asc, record_no asc
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
            console.error('selectProductNameStandards error:', error.response ? error.response.data : error.message);
            return { status: error.status ?? 500 };
        }
    }
}
exports.default = ProductNameStandardService;
//# sourceMappingURL=productNameStandardService.js.map