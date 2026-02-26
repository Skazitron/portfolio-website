<script lang="ts">
    import { fly } from 'svelte/transition';
    import { cubicOut } from 'svelte/easing';
</script>

<div class="min-h-[80vh] pt-32 px-6 md:px-10 max-w-5xl mx-auto">
    
    <h1 
        class="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-12 inline-block relative"
        in:fly={{ y: 50, duration: 800, easing: cubicOut }}
    >
        Cool Stuff
        <span class="absolute -bottom-4 left-0 w-full h-4 bg-black" in:fly={{ x: -100, duration: 800, delay: 200, easing: cubicOut }}></span>
    </h1>

    <div class="grid gap-8 mt-16">
        
        <a 
            href="/personal-blog" 
            class="group flex justify-between items-center p-8 md:p-12 border-4 border-black shadow-[8px_8px_0px_black] bg-yellow-300 font-black text-3xl md:text-5xl uppercase transition-all duration-300 hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[16px_16px_0px_black] active:translate-y-2 active:translate-x-2 active:shadow-none"
            in:fly={{ x: -50, opacity: 0, duration: 600, delay: 150, easing: cubicOut }}
        >
            <span>Personal Blog</span>
            <span class="text-5xl md:text-6xl group-hover:-rotate-45 transition-transform duration-300">→</span>
        </a>
        
        <a 
            href="/blogs-for-shariq" 
            class="group flex justify-between items-center p-8 md:p-12 border-4 border-black shadow-[8px_8px_0px_black] bg-red-400 font-black text-3xl md:text-5xl uppercase transition-all duration-300 hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[16px_16px_0px_black] active:translate-y-2 active:translate-x-2 active:shadow-none"
            in:fly={{ x: -50, opacity: 0, duration: 600, delay: 300, easing: cubicOut }}
        >
            <span>Blogs for Shariq</span>
            <span class="text-5xl md:text-6xl group-hover:-rotate-45 transition-transform duration-300">→</span>
        </a>

    </div>
</div>