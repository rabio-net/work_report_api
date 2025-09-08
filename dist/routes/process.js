"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const token_1 = require("../middlewares/token");
const processController_1 = __importDefault(require("../controllers/processController"));
const router = (0, express_1.Router)();
router.get('/records', token_1.verifyAccessToken, processController_1.default.selectProcesses);
exports.default = router;
//# sourceMappingURL=process.js.map