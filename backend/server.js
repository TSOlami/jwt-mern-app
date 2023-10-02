import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import cookieParser from 'cookie-parser';

import { notFound, errorHandler } from './middleware/errormiddleware.js';
import connectDb from './config/db.js';
connectDb();
const port = process.env.PORT || 5000

import userRoutes from './routes/userRoutes.js';
import adminRoutes from './routes/adminRoutes.js';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const apiVersion = process.env.API_VERSION || 'v1';

app.use(`/api/${apiVersion}/users`, userRoutes);
app.use(`/api/${apiVersion}/admin`, adminRoutes);

app.get('/', (req, res) => res.send('Server is ready'));

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server is started on port ${port}`));
