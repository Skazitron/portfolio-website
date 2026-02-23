<script lang="ts">
    import { displayDropdown } from '../dropdown.svelte';
	import Icon from "@iconify/svelte";

    let closeTimeout: ReturnType<typeof setTimeout>;

    const handleDropdown = () => {
        closeTimeout = setTimeout(() => {
            displayDropdown.dropdown = false;
        }, 300);
    };

    const cancelClose = () => {
        clearTimeout(closeTimeout);
        displayDropdown.dropdown = true;
    };
</script>

{#snippet headerlink(link: string, text: string, id: string)}
<a href={link}>
	<li id={id} class="pr-1 flex flex-col items-center hover:bg-black hover:text-white">
		{@html text}
	</li>
</a>
{/snippet}

<nav class="lg:px-96 md:px-20 sm:px-2 shadow fixed bg-white w-screen flex justify-between items-center">
    <div class="flex items-center space-x-20 px-4 w-full justify-center">
        <a href="/">
            <h1>Shahir Kazi</h1>
        </a>
        <ul class="flex space-x-2">
            {@render headerlink('/', 'home', 'home')}
            {@render headerlink('/#about', 'about', 'about')}
            {@render headerlink('/#projects', 'projects', 'projects')}
            
            <div 
                class="relative" 
                role="button" 
                tabindex="0" 
                onmouseenter={cancelClose} 
                onmouseleave={handleDropdown}
            >
                <a class="w-full" href="/cool-stuff">
                    <li id="cool-projects" class="pr-1 w-full hover:bg-black hover:text-white" onfocus={cancelClose}>
                        cool stuff &#8659;
                    </li>
                </a>

                {#if displayDropdown.dropdown}
                    <ul class="absolute space-y-1 top-full left-0 mt-2 shadow z-20 bg-white flex flex-col w-max">
                        {@render headerlink('/personal-blog', 'personal blog', 'pb')}
                        {@render headerlink('/blogs-for-shariq', 'blogs for shariq', 'bfs')}
                    </ul>
                {/if}
            </div>
			{@render headerlink('/#hire-me', 'hire me!', 'hire-me')}
        </ul>
		<div class="flex space-x-4 content-center right-0 px-4">
			<a target="_blank" href="https://github.com/Skazitron">
				<Icon icon="mdi:github" width="28" height="28" />	
			</a>
			<a target="_blank" href="https://www.linkedin.com/in/arnobkazi/">
				<Icon icon="devicon:linkedin" width="28" height="28" />
			</a>
		</div>
    </div>
</nav>

<style>
	
	a {
		text-decoration: none;
	}

	nav {
		font-family: 'Playfair Display Variable', serif;
	}

	li {

		font-family: 'Playfair Display Variable', serif;
		padding-left: 2px;
		padding-right: 2px;
	}

	h1 {
		font-size: x-large;
	}

</style>