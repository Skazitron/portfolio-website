<script lang="ts">
    import { page } from '$app/state';
    import '@fontsource-variable/inter';
    import '@fontsource-variable/playfair-display';
    import Navbar from '../components/Navbar.svelte';
    
    let { children } = $props();

    let pageTitle = $derived.by(() => {
        const path = page.url.pathname;
        
        if (path === '/') return 'Home';

        const lastSegment = path.split('/').filter(Boolean).pop() || '';

        return lastSegment
            .split(/[-_]/)
            .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    });
</script>

<svelte:head>
    <link rel="icon" href="/favicon.png" />
    
    <title>{pageTitle} | My Site</title>
</svelte:head>

<Navbar />

<div class="bg-gray-50 min-h-screen font-sans text-gray-900 selection:bg-black selection:text-white">
    <main class="w-full max-w-360 mx-auto bg-white min-h-screen pt-24 pb-12 shadow-sm border-x-0 2xl:border-x-4 border-black">
        {@render children()}
    </main>
</div>