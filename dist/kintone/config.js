"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appId = exports.url = void 0;
require("dotenv").config();
exports.url = {
    record: `https://${process.env.KINTONE_SUB_DOMAIN}.cybozu.com/k/v1/record.json`,
    records: `https://${process.env.KINTONE_SUB_DOMAIN}.cybozu.com/k/v1/records.json`,
    users: `https://${process.env.KINTONE_SUB_DOMAIN}.cybozu.com/v1/users.json`,
};
exports.appId = {
    company: 79,
    ingredient_classification: 82,
    ingredient: 83,
    product_name_standard: 84,
    packing_style: 86,
    product_standard: 91,
    lot_identifier: 92,
    product_size: 94,
    process: 95,
    process_standard: 96,
    ingredient_storing: 100,
    semifinished_ingredient: 105,
    semifinished: 106,
    product_ingredient: 107,
    product: 108,
    /*
    company: 148,
    ingredient_classification: 151,
    ingredient: 152,
    product_name_standard: 154,
    packing_style: 156,
    product_standard: 161,
    lot_identifier: 162,
    product_size: 164,
    process: 165,
    process_standard: 166,
    ingredient_storing: 172,
    semifinished_ingredient: 183,
    semifinished: 184,
    product_ingredient: 185,
    product: 186,
    */
};
//# sourceMappingURL=config.js.map