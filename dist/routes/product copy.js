"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const token_1 = require("../middlewares/token");
const productController_1 = __importDefault(require("../controllers/productController"));
const router = (0, express_1.Router)();
router.get('/records', token_1.verifyAccessToken, productController_1.default.selectProducts);
router.get('/record', token_1.verifyAccessToken, productController_1.default.selectProduct);
router.post('/record', token_1.verifyAccessToken, productController_1.default.insertProduct);
router.put('/record', token_1.verifyAccessToken, productController_1.default.updateProduct);
exports.default = router;
//# sourceMappingURL=product%20copy.js.map