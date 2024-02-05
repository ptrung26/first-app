export interface Post {
    title: string;
    id: number;
    content: string;
}

const posts: Post[] = [];

for (let i = 1; i <= 20; i++) {
    posts.push({
        id: i,
        title: `Sample Post ${i}`,
        content: `Content for sample post ${i}.`,
    });
}

export { posts }; 