"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const token_1 = require("../middlewares/token");
const semifinishedIngredientController_1 = __importDefault(require("../controllers/semifinishedIngredientController"));
const router = (0, express_1.Router)();
router.get('/records', token_1.verifyAccessToken, semifinishedIngredientController_1.default.selectSemifinishedIngredients);
router.get('/include-semifinished', token_1.verifyAccessToken, semifinishedIngredientController_1.default.selectSemifinishedIngredients_includeSemifinished);
router.get('/include-ingredient-storing', token_1.verifyAccessToken, semifinishedIngredientController_1.default.selectSemifinishedIngredients_includeIngredientStoring);
router.post('/record', token_1.verifyAccessToken, semifinishedIngredientController_1.default.insertSemifinishedIngredient);
exports.default = router;
//# sourceMappingURL=semifinishedIngredient.js.map