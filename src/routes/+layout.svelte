<script lang="ts">
	import '@fontsource-variable/inter';
	import '@fontsource-variable/playfair-display';
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import Navbar from '../components/Navbar.svelte';
	import { displayDropdown } from '../dropdown.svelte';
	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
<Navbar />
<div class="bg-offwhite min-h-screen">
	<div class="lg:mx-96 md:mx-40 sm:mx-0 bg-white min-h-screen pt-16 px-40">
		{@render children()}
	</div>
</div>
