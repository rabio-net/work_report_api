"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const token_1 = require("../middlewares/token");
const productSizeController_1 = __importDefault(require("../controllers/productSizeController"));
const router = (0, express_1.Router)();
router.get('/records', token_1.verifyAccessToken, productSizeController_1.default.selectProductSizes);
exports.default = router;
//# sourceMappingURL=productSize.js.map