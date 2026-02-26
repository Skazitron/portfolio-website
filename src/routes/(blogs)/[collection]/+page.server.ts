import { error } from '@sveltejs/kit';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export async function load({ params }) {
    const { collection } = params;
    
    const folderMap: Record<string, string> = {
        'personal-blog': 'personal',
        'blogs-for-shariq': 'shariq'
    };

    const folder = folderMap[collection];
    if (!folder) throw error(404, 'Collection not found');

    const dirPath = path.resolve(`content/${folder}`);
    
    if (!fs.existsSync(dirPath)) return { posts: [], collectionName: collection };

    const files = fs.readdirSync(dirPath);
    
    const posts = files
        .filter(file => file.endsWith('.md'))
        .map(file => {
            const fileContent = fs.readFileSync(path.join(dirPath, file), 'utf-8');
            const { data } = matter(fileContent);
            return {
                slug: file.replace('.md', ''),
                title: data.title || 'Untitled Post',
                timestamp: data.timestamp || new Date().toISOString(),
            };
        })
        // Sort newest to oldest
        .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());

    return {
        posts,
        collectionName: collection.replace(/-/g, ' ')
    };
}