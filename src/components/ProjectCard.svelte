<script lang="ts">
    import Icon from "@iconify/svelte";

    let { 
        title = "Project Title", 
        description = "A short description of the project goes right here.", 
        image = "/images/cropped_img.jpg",
        tags = ["Svelte", "Tailwind"], 
        link = "", 
        github = "" 
    } = $props();
</script>

<div class="group flex flex-col w-full sm:min-w-80 sm:max-w-80 h-full bg-white border-4 border-black rounded-xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 hover:-translate-x-1 hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 overflow-hidden text-left">
    
    <div class="w-full aspect-video border-b-4 border-black overflow-hidden bg-gray-100 shrink-0">
        <img 
            src={image} 
            alt={title} 
            class="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-transform duration-500 ease-out"
        />
    </div>

    <div class="flex flex-col grow p-6">
        
        <h3 class="text-2xl font-black mb-2 leading-tight">{title}</h3>
        
        <p class="text-sm text-gray-700 font-medium leading-relaxed flex-grow">
            {description}
        </p>

        <div class="flex flex-wrap gap-2 mt-4 pt-4 border-t-2 border-dashed border-gray-200">
            {#each tags as tag}
                <span class="text-[10px] font-bold uppercase tracking-widest bg-gray-100 border border-gray-300 px-2 py-1 rounded-md text-gray-800">
                    {tag}
                </span>
            {/each}
        </div>

        <div class="flex items-center justify-between mt-6">
            {#if link}
                <a href={link} target="_blank" class="inline-flex items-center font-bold text-black hover:text-blue-700 transition-colors">
                    View <span class="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                </a>
            {:else}
                <span class="text-gray-400 font-bold italic text-sm">Offline</span>
            {/if}

            {#if github}
                <a href={github} target="_blank" class="text-gray-400 hover:text-black hover:scale-110 transition-all" title="View Source">
                    <Icon icon="mdi:github" width="24" height="24" />
                </a>
            {/if}
        </div>

    </div>
</div>