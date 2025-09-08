"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyAccessToken = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
require('dotenv').config();
const verifyAccessToken = async (request, response, next) => {
    try {
        const hds = request?.headers?.authorization?.split(' ');
        const token = (hds && hds.length > 2) ? hds[1] : undefined;
        if (!token) {
            response.status(401).send('Token must be provided!');
            return;
        }
        const decodedToken = (0, jsonwebtoken_1.verify)(token, process.env.JWT_SECRET_KEY ?? '');
        console.log("=============AUTH TOKEN=============");
        console.debug(decodedToken);
        next();
    }
    catch {
        response.status(401).send('Authorization failed!');
    }
};
exports.verifyAccessToken = verifyAccessToken;
//# sourceMappingURL=verifyAccessToken.js.map