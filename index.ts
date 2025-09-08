import express from "express";
import cors from "cors";
import authRouter from './routes/auth';
import ingredientClassificationRouter from './routes/ingredientClassification';
import ingredientRouter from './routes/ingredient';
import productStandardRouter from './routes/productStandard';
import productNameStandardRouter from './routes/productNameStandard';
import packingStyleRouter from './routes/packingStyle';
import lotIdentifierRouter from './routes/lotIdentifier';
import productSizeRouter from './routes/productSize';
import processRouter from './routes/process';
import processStandardRouter from './routes/processStandard';
import ingredientStoringRouter from './routes/ingredientStoring';
import semifinishedIngredientRouter from './routes/semifinishedIngredient';
import semifinishedRouter from './routes/semifinished';
import productIngredientRouter from './routes/productIngredient';
import productRouter from './routes/product';
require('dotenv').config();

const port = process.env.PORT;
const allowedOrigins = [
  'http://localhost:3000',
  'http://localhost:3001',
];
const options: cors.CorsOptions = {
  origin: allowedOrigins
};

const app = express();
app.use(cors(options));
app.use(express.json());
app.use('/api/auth', authRouter);
app.use('/api/ingredient-classification', ingredientClassificationRouter);
app.use('/api/ingredient', ingredientRouter);
app.use('/api/product-standard', productStandardRouter);
app.use('/api/product-name-standard', productNameStandardRouter);
app.use('/api/packing-style', packingStyleRouter);
app.use('/api/lot_identifier', lotIdentifierRouter);
app.use('/api/product-size', productSizeRouter);
app.use('/api/process', processRouter);
app.use('/api/process-standard', processStandardRouter);
app.use('/api/ingredient-storing', ingredientStoringRouter);
app.use('/api/semifinished-ingredient', semifinishedIngredientRouter);
app.use('/api/semifinished', semifinishedRouter);
app.use('/api/product-ingredient', productIngredientRouter);
app.use('/api/product', productRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
})
