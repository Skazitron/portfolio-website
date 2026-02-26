export async function GET() {
    // The base URL of your website
    const website = 'https://shahirkazi.com';

    // 1. Manually add your static routes here
    const staticPages = [
        '',             // The home page (/)
        '/cool-stuff'   // Your cool-stuff route
    ];

    // 2. Dynamically find all Markdown files in your content folder
    // This looks for all .md files and fetches their paths
    const markdownFiles = import.meta.glob('/content/**/*.md', { eager: true });
    
    // 3. Extract the collection and slug from the file paths to build the URLs
    const dynamicUrls = Object.keys(markdownFiles).map((path) => {
        // Path looks like: /content/personal/my-first-post.md
        const pathParts = path.split('/');
        
        const collection = pathParts[pathParts.length - 2]; // e.g., 'personal'
        const fileName = pathParts[pathParts.length - 1];   // e.g., 'my-first-post.md'
        const slug = fileName.replace('.md', '');           // e.g., 'my-first-post'
        
        // This matches your route structure: /(blogs)/[collection]/[slug]
        return `/${collection}/${slug}`;
    });

    // 4. Combine static pages and dynamic blog posts
    const allPages = [...staticPages, ...dynamicUrls];

    // 5. Generate the XML structure
    const sitemap = `
        <?xml version="1.0" encoding="UTF-8" ?>
        <urlset
            xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
            xmlns:xhtml="https://www.w3.org/1999/xhtml"
            xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
            xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
            xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
            xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
        >
            ${allPages
                .map(
                    (page) => `
            <url>
                <loc>${website}${page}</loc>
                <changefreq>weekly</changefreq>
                <priority>0.8</priority>
            </url>
            `
                )
                .join('')}
        </urlset>`.trim();

    // 6. Return the response with the correct XML headers
    return new Response(sitemap, {
        headers: {
            'Content-Type': 'application/xml',
            'Cache-Control': 'max-age=0, s-maxage=3600'
        }
    });
}