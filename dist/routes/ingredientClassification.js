"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const token_1 = require("../middlewares/token");
const ingredientClassificationController_1 = __importDefault(require("../controllers/ingredientClassificationController"));
const router = (0, express_1.Router)();
router.get('/records', token_1.verifyAccessToken, ingredientClassificationController_1.default.selectIngredientClassifications);
exports.default = router;
//# sourceMappingURL=ingredientClassification.js.map