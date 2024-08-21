import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { ThreadRoutes } from './routes/threads.routes';
import { middleWareCheckorigin } from './middleware/treads.middleware';

dotenv.config();

const app = express();

app.use(express.json());

app.use(middleWareCheckorigin)
app.use('/threads', ThreadRoutes);

mongoose.connect(process.env.MONGO_URI as string)
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.log(err);
    });

app.listen(8001, () => {
    console.log('Server is running on port 8001');
})
