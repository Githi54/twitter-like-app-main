import dotenv from 'dotenv';
import express from 'express';

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (_, res) => {
    res.send('Hello world!')
});

app.listen(port, () => {
    console.log(`Server run at port ${port}🚀`)
})
