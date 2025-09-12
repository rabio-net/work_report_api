"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const token_1 = require("../middlewares/token");
const productNameStandardController_1 = __importDefault(require("../controllers/productNameStandardController"));
const router = (0, express_1.Router)();
router.get('/records', token_1.verifyAccessToken, productNameStandardController_1.default.selectProductNameStandards);
exports.default = router;
//# sourceMappingURL=productNameStandard.js.map