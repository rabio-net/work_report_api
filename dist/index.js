"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const auth_1 = __importDefault(require("./routes/auth"));
const ingredientClassification_1 = __importDefault(require("./routes/ingredientClassification"));
const ingredient_1 = __importDefault(require("./routes/ingredient"));
const productStandard_1 = __importDefault(require("./routes/productStandard"));
const productNameStandard_1 = __importDefault(require("./routes/productNameStandard"));
const packingStyle_1 = __importDefault(require("./routes/packingStyle"));
const lotIdentifier_1 = __importDefault(require("./routes/lotIdentifier"));
const productSize_1 = __importDefault(require("./routes/productSize"));
const process_1 = __importDefault(require("./routes/process"));
const processStandard_1 = __importDefault(require("./routes/processStandard"));
const ingredientStoring_1 = __importDefault(require("./routes/ingredientStoring"));
const semifinishedIngredient_1 = __importDefault(require("./routes/semifinishedIngredient"));
const semifinished_1 = __importDefault(require("./routes/semifinished"));
const productIngredient_1 = __importDefault(require("./routes/productIngredient"));
const product_1 = __importDefault(require("./routes/product"));
require('dotenv').config();
const port = process.env.PORT;
const allowedOrigins = [
    'http://localhost:3000',
    'http://localhost:3001',
];
const options = {
    origin: allowedOrigins
};
const app = (0, express_1.default)();
app.use((0, cors_1.default)(options));
app.use(express_1.default.json());
app.use('/api/auth', auth_1.default);
app.use('/api/ingredient-classification', ingredientClassification_1.default);
app.use('/api/ingredient', ingredient_1.default);
app.use('/api/product-standard', productStandard_1.default);
app.use('/api/product-name-standard', productNameStandard_1.default);
app.use('/api/packing-style', packingStyle_1.default);
app.use('/api/lot_identifier', lotIdentifier_1.default);
app.use('/api/product-size', productSize_1.default);
app.use('/api/process', process_1.default);
app.use('/api/process-standard', processStandard_1.default);
app.use('/api/ingredient-storing', ingredientStoring_1.default);
app.use('/api/semifinished-ingredient', semifinishedIngredient_1.default);
app.use('/api/semifinished', semifinished_1.default);
app.use('/api/product-ingredient', productIngredient_1.default);
app.use('/api/product', product_1.default);
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
//# sourceMappingURL=index.js.map