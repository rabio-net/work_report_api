require("dotenv").config();

export const url = {
  record: `https://${process.env.KINTONE_SUB_DOMAIN}.cybozu.com/k/v1/record.json`,
  records: `https://${process.env.KINTONE_SUB_DOMAIN}.cybozu.com/k/v1/records.json`,
  users: `https://${process.env.KINTONE_SUB_DOMAIN}.cybozu.com/v1/users.json`,
};

export const appId = {
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
};
