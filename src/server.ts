import express from 'express';
import { router } from './routes/routes';

const app = express();
app.use(express.json());
app.use(router)
app.listen(3066, () => {
    return console.log("Server online");
})