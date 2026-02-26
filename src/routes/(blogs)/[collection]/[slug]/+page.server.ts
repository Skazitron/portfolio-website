import { error } from '@sveltejs/kit';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export async function load({ params }) {

    const { collection, slug } = params;
    
    const folderMap: Record<string, string> = {
        'personal-blog': 'personal',
        'blogs-for-shariq': 'shariq'
    };
    
    const folder = folderMap[collection]; 
    
    const filePath = path.join(process.cwd(), 'content', folder, `${slug}.md`);

    if (!fs.existsSync(filePath)) throw error(404, 'Post not found');

    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(fileContent);

    const files = fs.readdirSync(`content/${folder}`);
    const allPosts = files.map(file => {
        const postContent = fs.readFileSync(`content/${folder}/${file}`, 'utf-8');
        const { data: postData } = matter(postContent);
        return {
            slug: file.replace('.md', ''),
            title: postData.title,
            timestamp: postData.timestamp
        };
    }).sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());

    // Simple Heading Parser for TOC
    const headings = content.match(/^##\s+(.*)$/gm)?.map(h => {
        const text = h.replace('## ', '');
        return { text, id: text.toLowerCase().replace(/\s+/g, '-'), level: 2 };
    }) || [];

    return {
        post: { ...data, body: content },
        allPosts,
        headings
    };
}