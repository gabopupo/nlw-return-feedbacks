import express from 'express';
import cors from 'cors';
import { routes } from './routes';

const app = express();

app.use(cors({
    origin: 'https://nlw-return-feedbacks-production.up.railway.app',
}));
app.use(express.json());

app.use(routes);

app.listen(process.env.PORT || 3333, () => {
    console.log('HTTP server running');
});