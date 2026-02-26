<script lang="ts">
    import '@fontsource-variable/inter';
    import '@fontsource-variable/playfair-display';
    import { page } from '$app/state';
    import './layout.css';
    import Navbar from '../components/Navbar.svelte';
    let { children } = $props();

    let pageTitle = $derived.by(() => {
        const path = page.url.pathname;
        
        // Return 'Home' if it's the root route
        if (path === '/') return 'Home';

        // Get the last segment of the path (e.g., /company/about-us -> about-us)
        const lastSegment = path.split('/').filter(Boolean).pop() || '';

        // Replace hyphens/underscores with spaces and capitalize each word
        return lastSegment
            .split(/[-_]/)
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    });
</script>

<svelte:head>
    <link rel="icon" href="/favicon.png" />
    <title>{pageTitle} | Shahir Kazi</title>

    <meta name="description" content="Software engineering portfolio of Shahir Kazi. Explore my projects, skills, and development experience." />
    <meta name="author" content="Shahir Kazi" />

    <meta property="og:type" content="website" />
    <meta property="og:url" content={page.url.href} />
    <meta property="og:title" content="{pageTitle} | Shahir Kazi" />
    <meta property="og:description" content="Software engineering portfolio of Shahir Kazi. Explore my projects, skills, and development experience." />
    <meta property="og:image" content="https://shahirkazi.com/thumbnail.jpg" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:url" content={page.url.href} />
    <meta name="twitter:title" content="{pageTitle} | Shahir Kazi" />
    <meta name="twitter:description" content="Software engineering portfolio of Shahir Kazi. Explore my projects, skills, and development experience." />
    <meta name="twitter:image" content="https://shahirkazi.com/thumbnail.jpg" />
</svelte:head>

<Navbar />

<div class="bg-gray-50 min-h-screen font-sans text-gray-900 selection:bg-black selection:text-white">
    <main class="w-full max-w-360 mx-auto bg-white min-h-screen pt-24 pb-12 shadow-sm border-x-0 2xl:border-x-4 border-black">
        {@render children()}
    </main>
</div>