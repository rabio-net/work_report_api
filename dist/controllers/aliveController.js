"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AliveController {
    static async alive(request, response) {
        try {
            response.json(JSON.stringify({
                status: 200,
            }));
        }
        catch (e) {
            response.json(JSON.stringify({
                status: 401,
            }));
        }
    }
}
exports.default = AliveController;
//# sourceMappingURL=aliveController.js.map