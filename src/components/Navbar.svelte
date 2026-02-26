<script lang="ts">
    import { displayDropdown } from '../dropdown.svelte';
    import Icon from "@iconify/svelte";

    let closeTimeout: ReturnType<typeof setTimeout>;

    let isMobileMenuOpen = $state(false);
    let mobileCoolStuffOpen = $state(false);

    const handleDropdown = () => {
        closeTimeout = setTimeout(() => {
            displayDropdown.dropdown = false;
        }, 300);
    };

    const cancelClose = () => {
        clearTimeout(closeTimeout);
        displayDropdown.dropdown = true;
    };

    const toggleMobileMenu = () => {
        isMobileMenuOpen = !isMobileMenuOpen;
    };
</script>

{#snippet headerlink(link: string, text: string, id: string, target?: string)}
<li id={id} class="flex w-full md:w-auto">
    <a 
        href={link} 
        target={target}
        class="w-full px-4 py-3 md:py-2 flex flex-col items-start md:items-center font-bold rounded-full hover:bg-black hover:text-white transition-all hover:-translate-y-0.5"
        onclick={() => { isMobileMenuOpen = false; mobileCoolStuffOpen = false; }}
    >
        {@html text}
    </a>
</li>
{/snippet}

<nav class="fixed top-0 w-full bg-white border-b-4 border-black z-50">
    
    <div class="flex items-center justify-between w-full px-6 py-3 lg:px-40 md:justify-center md:space-x-12">
        
        <button class="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors" onclick={toggleMobileMenu} aria-label="Toggle Mobile Menu">
            <Icon icon={isMobileMenuOpen ? "mdi:close" : "mdi:menu"} width="32" height="32" />
        </button>

        <a href="/" class="shrink-0 hover:scale-105 transition-transform">
            <h1 class="text-2xl font-black tracking-tighter m-0">Shahir Kazi</h1>
        </a>

        <ul class="hidden md:flex space-x-1 items-center">
            {@render headerlink('/', 'home', 'nav-home')}
            {@render headerlink('/#about', 'about', 'nav-about')}
            {@render headerlink('/#experience', 'experience', 'nav-experience')}
            {@render headerlink('/#projects', 'my projects', 'nav-projects')}
            
            <div 
                class="relative flex items-center" 
                role="button" 
                tabindex="0" 
                onmouseenter={cancelClose} 
                onmouseleave={handleDropdown}
            >
                <li id="cool-projects" class="flex w-full md:w-auto">
                    <a href="/cool-stuff" class="w-full px-4 py-2 font-bold rounded-full hover:bg-black hover:text-white transition-all hover:-translate-y-0.5" onfocus={cancelClose}>
                        cool stuff &#8659;
                    </a>
                </li>

                {#if displayDropdown.dropdown}
                    <ul class="absolute top-full left-0 mt-4 py-3 bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded-xl flex flex-col w-max z-20 gap-1 px-2">
                        {@render headerlink('/personal-blog', 'personal blog', 'pb')}
                        {@render headerlink('/blogs-for-shariq', 'blogs for shariq', 'bfs')}
                    </ul>
                {/if}
            </div>
            
            {@render headerlink('/resume.pdf', 'resume', 'nav-resume', '_blank')}
            {@render headerlink('/#hire-me', 'hire me!', 'hire-me')}
        </ul>

        <div class="flex space-x-4 items-center shrink-0">
            <a target="_blank" href="https://github.com/Skazitron" class="hover:-translate-y-1 transition-transform">
                <Icon icon="mdi:github" width="32" height="32" />   
            </a>
            <a target="_blank" href="https://www.linkedin.com/in/arnobkazi/" class="hover:-translate-y-1 transition-transform">
                <Icon icon="devicon:linkedin" width="32" height="32" />
            </a>
        </div>
    </div>

    {#if isMobileMenuOpen}
        <div class="md:hidden absolute top-full left-0 w-full bg-white border-b-4 border-black shadow-lg">
            <ul class="flex flex-col w-full p-4 gap-2">
                {@render headerlink('/', 'home', 'nav-home-mobile')}
                {@render headerlink('/#about', 'about', 'nav-about-mobile')}
                {@render headerlink('/#projects', 'my projects', 'nav-projects-mobile')}
                {@render headerlink('/#experience', 'experience', 'nav-experience')}
                
                <li class="flex flex-col w-full bg-gray-50 rounded-xl overflow-hidden border-2 border-transparent focus-within:border-black transition-colors">
                    <div class="flex items-center justify-between w-full px-4">
                        <a href="/cool-stuff" class="w-full py-3 font-bold hover:text-gray-600" onclick={() => { isMobileMenuOpen = false; }}>
                            cool stuff
                        </a>
                        <button class="p-3 text-2xl font-black" onclick={() => mobileCoolStuffOpen = !mobileCoolStuffOpen}>
                            {mobileCoolStuffOpen ? '−' : '+'}
                        </button>
                    </div>
                    {#if mobileCoolStuffOpen}
                        <ul class="flex flex-col w-full px-4 pb-4 gap-1">
                            {@render headerlink('/personal-blog', '↳ personal blog', 'pb-mobile')}
                            {@render headerlink('/blogs-for-shariq', '↳ blogs for shariq', 'bfs-mobile')}
                        </ul>
                    {/if}
                </li>

                {@render headerlink('/resume.pdf', 'resume', 'nav-resume-mobile', '_blank')}
                {@render headerlink('/#hire-me', 'hire me!', 'hire-me-mobile')}
            </ul>
        </div>
    {/if}
</nav>

<style>
    a {
        text-decoration: none;
    }

    nav, li {
        font-family: 'Playfair Display Variable', serif;
    }
</style>