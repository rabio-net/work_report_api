"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const token_1 = require("../middlewares/token");
const productIngredientController_1 = __importDefault(require("../controllers/productIngredientController"));
const router = (0, express_1.Router)();
router.get('/records', token_1.verifyAccessToken, productIngredientController_1.default.selectProductIngredients);
router.get('/include-semifinished', token_1.verifyAccessToken, productIngredientController_1.default.selectProductIngredients_includeSemifinished);
router.post('/record', token_1.verifyAccessToken, productIngredientController_1.default.insertProductIngredient);
exports.default = router;
//# sourceMappingURL=productIngredient.js.map