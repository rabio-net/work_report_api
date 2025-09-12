"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = require("jsonwebtoken");
const auth_1 = require("../kintone/auth");
require('dotenv').config();
class AuthService {
    async login(username, password) {
        try {
            const pa = btoa(`${username}:${password}`);
            const user = await (0, auth_1.getKintoneUser)(username, pa);
            if (!user)
                return { status: 401 };
            const token = (0, jsonwebtoken_1.sign)({ id: user.id, name: user.name, code: pa }, process.env.JWT_SECRET_KEY ?? '', 
            //{ expiresIn: '600000' }, // 10 minutes
            { expiresIn: '10h' });
            return {
                status: 200,
                user: {
                    id: user.id,
                    name: user.name,
                },
                token,
            };
        }
        catch (e) {
            console.error('AuthService login', e);
            return { status: 401 };
        }
    }
    async logout() { }
}
exports.default = AuthService;
//# sourceMappingURL=authService.js.map