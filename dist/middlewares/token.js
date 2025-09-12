"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPwAuthToken = exports.verifyAccessToken = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const jwt_decode_1 = require("jwt-decode");
require('dotenv').config();
const getToken = (request) => {
    const hds = request?.headers?.authorization?.split('Token ');
    return (hds && hds.length > 1) ? hds[1] : undefined;
};
const verifyAccessToken = (request, response, next) => {
    try {
        const token = getToken(request);
        if (!token) {
            response.status(401).send('Token must be provided!');
            return;
        }
        const decodedToken = (0, jsonwebtoken_1.verify)(token, process.env.JWT_SECRET_KEY ?? '');
        next();
    }
    catch {
        response.status(401).send('Authorization failed!');
    }
};
exports.verifyAccessToken = verifyAccessToken;
const getPwAuthToken = (request) => {
    try {
        const token = getToken(request);
        if (!token)
            return undefined;
        const decoded = (0, jwt_decode_1.jwtDecode)(token);
        return decoded.code;
    }
    catch {
        return undefined;
    }
};
exports.getPwAuthToken = getPwAuthToken;
//# sourceMappingURL=token.js.map