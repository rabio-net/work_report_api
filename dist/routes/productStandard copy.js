"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const token_1 = require("../middlewares/token");
const productStandardController_1 = __importDefault(require("../controllers/productStandardController"));
const router = (0, express_1.Router)();
router.get('/records', token_1.verifyAccessToken, productStandardController_1.default.selectProductStandards);
exports.default = router;
//# sourceMappingURL=productStandard%20copy.js.map