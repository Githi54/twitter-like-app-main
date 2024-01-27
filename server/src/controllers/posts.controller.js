import  { getAllPosts } from '../services/posts.services.js';

export const getPosts = async (_, res) => {
    try {
        const data = await getAllPosts();

        res.status(200).send(data);
    } catch (error) {
        console.error(error.message);
    }
}
