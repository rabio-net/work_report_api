"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const aliveController_1 = __importDefault(require("../controllers/aliveController"));
const router = (0, express_1.Router)();
router.get('/', aliveController_1.default.alive);
exports.default = router;
//# sourceMappingURL=alive.js.map