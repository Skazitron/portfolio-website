<script lang="ts">
    import { page } from '$app/state';
    import { marked } from 'marked';
    
    interface PageData {
        post?: { body?: string; title?: string; timestamp?: string };
        allPosts?: Array<{ slug: string; title: string; timestamp?: string }>;
        headings?: Array<{ level: number; id: string; text: string }>;
    }

let { data }: { data: PageData } = $props();

    let htmlContent = marked.parse(data.post?.body ?? '') as string;

    htmlContent = htmlContent.replace(/<h2>(.*?)<\/h2>/g, (match, text) => {
        const cleanText = text.replace(/<[^>]*>?/gm, ''); 
        const id = cleanText.toLowerCase().replace(/[^\w]+/g, '-');
        return `<h2 id="${id}">${text}</h2>`;
    });

    const formatDate = (date: string) => {
        if (!date) return '';
        return new Date(date).toLocaleDateString('en-US', {
            year: 'numeric', month: 'short', day: 'numeric'
        });
    };
</script>

<div class="min-h-screen bg-white pt-32 pb-20 px-4 md:px-10">
    <div class="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        <aside class="hidden lg:block lg:col-span-2 sticky top-32 h-fit">
            <div class="border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-yellow-300 rounded-xl">
                <h3 class="font-black uppercase italic mb-4 border-b-2 border-black pb-2">Archive</h3>
                <ul class="space-y-3">
                    {#each data.allPosts ?? [] as p}
                        <li>
                            <a href="/{page.params.collection}/{p.slug}" 
                               data-sveltekit-reload
                               class="block text-sm font-bold hover:underline {p.slug === page.params.slug ? 'text-blue-700' : ''}">
                                <span class="block opacity-60 text-xs">{formatDate(p.timestamp ?? '')}</span>
                                {p.title}
                            </a>
                        </li>
                    {/each}
                </ul>
            </div>
        </aside>

        <main class="col-span-1 lg:col-span-8">
            <article class="border-4 border-black p-6 md:p-12 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] bg-white rounded-2xl">
                <header class="mb-10 border-b-4 border-black pb-6">
                    <div class="inline-block bg-black text-white px-3 py-1 font-bold text-sm uppercase mb-4">
                        {(page.params.collection ?? '').replace('-', ' ')}
                    </div>
                    <h1 class="text-4xl md:text-6xl font-black leading-none uppercase tracking-tighter">
                        {data.post?.title ?? 'Untitled Post'}
                    </h1>
                    <p class="mt-4 font-black italic text-gray-600 underline">
                        Published: {formatDate(data.post?.timestamp ?? '')}
                    </p>
                </header>

                <div class="prose prose-xl prose-black max-w-none font-medium leading-snug">
                    {@html htmlContent}
                </div>
            </article>
        </main>

        <aside class="hidden lg:block lg:col-span-2 sticky top-32 h-fit">
            {#if data.headings && data.headings.length > 0}
                <div class="border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-red-400 rounded-xl">
                    <h3 class="font-black uppercase italic mb-4 border-b-2 border-black pb-2">On this page</h3>
                    <ul class="space-y-2">
                        {#each data.headings as heading}
                            <li style="margin-left: {(heading.level - 1) * 10}px">
                                <a href="#{heading.id}" class="text-sm font-bold hover:bg-black hover:text-white px-1 transition-colors block">
                                    # {heading.text}
                                </a>
                            </li>
                        {/each}
                    </ul>
                </div>
            {/if}
        </aside>

    </div>
</div>

<style>
    :global(.prose) { 
        font-family: 'Inter Variable', sans-serif; 
    }
    
    :global(.prose h2) { 
        font-weight: 900; 
        text-transform: uppercase; 
        margin-top: 1.5em; 
        border-left: 8px solid #fbbf24; 
        padding-left: 1rem; 
    }
    
    :global(.prose p) { 
        margin-top: 1em;
        margin-bottom: 1em; 
        font-size: medium;
        line-height: 1.5; 
    }

    :global(.prose li) {
        margin-top: 0.20em;
        margin-bottom: 0.20em;
    }
    
    :global(.prose img) { 
        border: 4px solid black; 
        border-radius: 1rem; 
        box-shadow: 8px 8px 0px black; 
    }
</style>