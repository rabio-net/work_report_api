"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const master_1 = require("../kintone/master");
class DrawerService {
    async getIngredientClassification(pwAuth) {
        return await (0, master_1.getIngredientClassificationAll)(pwAuth);
    }
    async logout() { }
}
exports.default = DrawerService;
//# sourceMappingURL=drawerService.js.map