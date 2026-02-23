<script lang="ts">
    import '@fontsource-variable/inter';
    import '@fontsource-variable/playfair-display';
    import './layout.css';
    import favicon from '$lib/assets/favicon.svg';
    import Navbar from '../components/Navbar.svelte';
    let { children } = $props();
</script>

<svelte:head>
    <link rel="icon" href={favicon} />
</svelte:head>

<Navbar />

<div class="bg-gray-50 min-h-screen font-sans text-gray-900 selection:bg-black selection:text-white">
    
    <main class="w-full max-w-360 mx-auto bg-white min-h-screen pt-24 pb-12 shadow-sm border-x-0 2xl:border-x-4 border-black">
        {@render children()}
    </main>

</div>