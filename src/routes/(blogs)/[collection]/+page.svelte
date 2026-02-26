<script lang="ts">
    import { page } from '$app/state';
    interface PageData {
        collectionName: string;
        posts: Array<{ slug: string; timestamp: string; title: string }>;
    }
    let { data }: { data: PageData } = $props();
</script>

<div class="min-h-screen bg-white pt-32 pb-20 px-6">
    <div class="max-w-4xl mx-auto">
        <h1 class="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-12 border-b-8 border-black pb-4 italic bg-yellow-300 inline-block px-4 rotate-[-1deg]">
            {data.collectionName}
        </h1>

        <div class="grid gap-6">
            {#each data.posts as post}
                <a href="/{page.params.collection}/{post.slug}" 
                   class="group block border-4 border-black p-6 bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all">
                    <div class="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                        <span class="font-black text-sm uppercase px-2 py-1 bg-black text-white w-fit">
                            {new Date(post.timestamp).toLocaleDateString()}
                        </span>
                    </div>
                    <h2 class="text-3xl md:text-4xl font-black uppercase group-hover:underline">
                        {post.title}
                    </h2>
                    <p class="mt-4 font-bold text-black group-hover:translate-x-2 transition-transform">Read entry →</p>
                </a>
            {:else}
                <div class="border-4 border-dashed border-black p-20 text-center">
                    <p class="text-2xl font-black uppercase opacity-40">No transmission found in this sector.</p>
                </div>
            {/each}
        </div>
    </div>
</div>