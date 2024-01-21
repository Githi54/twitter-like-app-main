import dotenv from 'dotenv';
import express from 'express';
import { postRouter } from './routes/postsRoutes.js';

dotenv.config();
const app = express();
const port = process.env.PORT;

app.use('/posts', express.json(), postRouter);

app.get('/', (_, res) => {
    res.send('Hello world!');
});

app.listen(port, () => {
    console.log(`Server run at port ${port}🚀`)
})
