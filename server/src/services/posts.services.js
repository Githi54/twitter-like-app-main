import fs from 'fs/promises';

export async function getAllPosts() {
    try {
        const posts = await fs.readFile('../server/src/database/posts.json');

        return JSON.parse(posts);
    } catch (error) {
        throw error;
    }
}
