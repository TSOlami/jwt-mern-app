import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const port = process.env.PORT || 5000;

const app = express();

const apiVersion = process.env.API_VERSION || 'v1';

app.use(`/api/${apiVersion}/users`, userRoutes);

app.get('/', (req, res) => res.send('Server is ready'));

app.listen(port, () => {console.log(`Server started on port ${port}`)} );
