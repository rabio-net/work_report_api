"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const token_1 = require("../middlewares/token");
const ingredientStoringController_1 = __importDefault(require("../controllers/ingredientStoringController"));
const router = (0, express_1.Router)();
router.get('/record', token_1.verifyAccessToken, ingredientStoringController_1.default.selectIngredientStoring);
exports.default = router;
//# sourceMappingURL=ingredientStoring.js.map