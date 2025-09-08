"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const token_1 = require("../middlewares/token");
const drawerController_1 = __importDefault(require("../controllers/drawerController"));
const router = (0, express_1.Router)();
router.get('/select-ingredient/ingredient-classification', token_1.verifyAccessToken, drawerController_1.default.getIngredientClassification);
exports.default = router;
//# sourceMappingURL=drawer.js.map