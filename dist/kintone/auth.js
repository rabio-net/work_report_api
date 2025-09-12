"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getKintoneUser = void 0;
const axios_1 = __importDefault(require("axios"));
const config_1 = require("./config");
const getKintoneUser = async (username, pw_auth) => {
    const param = encodeURI(`?codes[0]=${username}`);
    try {
        const loginUser = await axios_1.default.get(config_1.url.users + param, {
            headers: {
                'X-Cybozu-Authorization': pw_auth,
            },
        });
        if (loginUser &&
            loginUser.status === 200 &&
            loginUser.data &&
            loginUser.data.users &&
            loginUser.data.users.length === 1)
            return loginUser.data.users[0];
        else
            return undefined;
    }
    catch (error) {
        console.error('getKintoneUser error:', error.response ? error.response.data : error.message);
        return undefined;
    }
};
exports.getKintoneUser = getKintoneUser;
//# sourceMappingURL=auth.js.map