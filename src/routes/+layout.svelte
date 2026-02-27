<script lang="ts">
    import '@fontsource-variable/inter';
    import '@fontsource-variable/playfair-display';
    import { page } from '$app/state';
    import './layout.css';
    import Navbar from '../components/Navbar.svelte';
    import { fly } from 'svelte/transition';
	import Footer from '../components/Footer.svelte';

    let { children } = $props();

    let scrollY = $state(0);

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

    <meta name="description" content="Software engineering portfolio of Shahir Kazi. Explore my projects, skills, and development experience. Reach out to me to me on LinkedIn if you wanna get in touch!" />
    <meta name="author" content="Shahir Kazi" />

    <meta property="og:type" content="website" />
    <meta property="og:url" content={page.url.href} />
    <meta property="og:title" content="{pageTitle} | Shahir Kazi" />
    <meta property="og:description" content="Software engineering portfolio of Shahir Kazi. Explore my projects, skills, and development experience. Reach out to me to me on LinkedIn if you wanna get in touch!" />
    <meta property="og:image" content="https://shahirkazi.com/thumbnail.jpg" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:url" content={page.url.href} />
    <meta name="twitter:title" content="{pageTitle} | Shahir Kazi" />
    <meta name="twitter:description" content="Software engineering portfolio of Shahir Kazi. Explore my projects, skills, and development experience.  Reach out to me to me on LinkedIn if you wanna get in touch!" />
    <meta name="twitter:image" content="https://shahirkazi.com/thumbnail.jpg" />

</svelte:head>

<svelte:window bind:scrollY />

<Navbar />

<div class="bg-gray-50 min-h-screen font-sans text-gray-900 selection:bg-black selection:text-white">
    <main class="w-full max-w-360 mx-auto bg-white min-h-screen pt-24 pb-12 shadow-sm border-x-0 2xl:border-x-4 border-black">
        {@render children()}
    </main>
</div>

<Footer />

{#if scrollY > 400}
    <button 
        onclick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        transition:fly={{ y: 20, duration: 300 }}
        class="fixed bottom-8 right-8 md:bottom-12 md:right-12 z-50 inline-block bg-yellow-300 text-black px-6 py-4 font-black uppercase tracking-widest text-sm border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1.5 hover:translate-y-1.5 hover:bg-black hover:text-white transition-all cursor-pointer"
        aria-label="Back to top"
    >
        ↑ Top
    </button>
{/if}