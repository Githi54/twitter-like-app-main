import express from 'express';

const postRouter = express.Router();

postRouter.get('/', (_, res) => {
    res.send('Great!');
})

export { postRouter };
