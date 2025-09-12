"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const token_1 = require("../middlewares/token");
const processStandardController_1 = __importDefault(require("../controllers/processStandardController"));
const router = (0, express_1.Router)();
router.get('/records', token_1.verifyAccessToken, processStandardController_1.default.selectProcessStandards);
exports.default = router;
//# sourceMappingURL=processStandard.js.map