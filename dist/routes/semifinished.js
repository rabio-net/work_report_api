"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const token_1 = require("../middlewares/token");
const semifinishedController_1 = __importDefault(require("../controllers/semifinishedController"));
const router = (0, express_1.Router)();
router.get('/records', token_1.verifyAccessToken, semifinishedController_1.default.selectSemifinisheds);
router.get('/record', token_1.verifyAccessToken, semifinishedController_1.default.selectSemifinished);
router.post('/record', token_1.verifyAccessToken, semifinishedController_1.default.insertSemifinished);
router.put('/record', token_1.verifyAccessToken, semifinishedController_1.default.updateSemifinished);
exports.default = router;
//# sourceMappingURL=semifinished.js.map