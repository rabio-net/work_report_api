"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const token_1 = require("../middlewares/token");
const packingStyleController_1 = __importDefault(require("../controllers/packingStyleController"));
const router = (0, express_1.Router)();
router.get('/records', token_1.verifyAccessToken, packingStyleController_1.default.selectPackingStyles);
exports.default = router;
//# sourceMappingURL=processStandardRouter.js.map