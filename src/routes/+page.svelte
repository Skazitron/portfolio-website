<script lang="ts">
    import Icon from "@iconify/svelte";

    const projects = [
        {
            title: "Software Engineer @ Canonical",
            period: "Jan 2026 — Present",
            description: "Member of the Web Team, engineering the front-end architecture and high-traffic platforms that power the Ubuntu ecosystem globally.",
            link: "https://canonical.com",
            github: "", // Optional
            img: "/images/canonical-work.jpg",
            tags: ["Svelte", "Vanilla", "Python", "Go"]
        },
        {
            title: "Portfolio Website",
            description: "A high-performance personal site built with Svelte 5, featuring a brutalist-inspired design and custom responsive navigation.",
            link: "https://shahir.dev",
            github: "https://github.com/Skazitron/portfolio-website",
            img: "/images/project1.jpg",
            tags: ["SvelteKit", "Tailwind CSS", "Vite"]
        }
    ];
</script>

<section id="hero" class="min-h-[85vh] flex flex-col lg:flex-row items-center justify-center px-6 lg:px-40 py-20 gap-12 lg:gap-24 bg-white">
    <div class="flex flex-col items-center space-y-6 shrink-0 text-center">
        <div class="relative group">
            <a href="https://github.com/Skazitron" target="_blank">
                <img 
                    src="/images/cropped_img.jpg" 
                    alt="Shahir Kazi"
                    class="rounded-full w-56 h-56 lg:w-72 lg:h-72 object-cover border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-transform group-hover:-rotate-2"
                />
                <span class="absolute bottom-0 right-0 text-5xl animate-bounce-slow cursor-default" title="Hello!">👋</span>
            </a>
        </div>
        <a href="https://github.com/Skazitron" target="_blank" class="no-underline">
            <div class="bg-gray-100 px-6 py-2 rounded-full italic text-gray-700 font-medium hover:bg-black hover:text-white transition-colors">
                Software Engineer @ Canonical
            </div>
        </a>
    </div>

    <div class="flex flex-col space-y-6 max-w-2xl text-center lg:text-left">
        <h1 class="text-4xl lg:text-6xl font-black leading-tight tracking-tight text-black">
            Hey, I'm Shahir. 
            <span class="block text-2xl lg:text-4xl font-bold mt-4 leading-snug text-gray-600">
                I engineer 
                <span class="font-black text-blue-700 bg-blue-50 hover:bg-blue-100 px-2 py-1 transition-colors rounded-md">scalable web platforms</span> 
                and 
                <span class="font-black text-red-700 bg-red-50 hover:bg-red-100 transition-colors px-2 py-1 rounded-md">digital experiences</span>.
            </span>
        </h1>
        
        <p class="text-xl text-gray-700 leading-relaxed font-medium max-w-lg mx-auto lg:mx-0">
            I build the front-end architecture and high-traffic platforms that connect millions of users to the open-source ecosystem.
            In my free time, I'm likely lifting, reading, or watching Lovecraftian horror.
        </p>

        <div class="pt-6 flex flex-wrap justify-center lg:justify-start gap-4">
            <a href="#projects" class="px-8 py-4 bg-black text-white text-lg rounded-full hover:bg-gray-800 transition hover:-translate-y-1 shadow-lg font-bold">
                Explore my work ↓
            </a>
            <a href="#about" class="px-8 py-4 bg-white text-black text-lg border-2 border-black rounded-full hover:bg-gray-50 transition hover:-translate-y-1 font-bold">
                More about me
            </a>
        </div>
    </div>
</section>

<div class="px-6 lg:px-40">
    <hr class="border-t-4 border-black w-full" />
</div>
<section id="projects" class="px-6 lg:px-40 py-20 bg-white">
    <h2 class="text-5xl font-black mb-20 tracking-tighter italic uppercase">Work & Projects</h2>
    
    <div class="space-y-32">
        {#each projects as project, i}
            <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center group">
                
                <div class="{i % 2 === 0 ? 'order-2 md:order-1' : 'order-2'} flex flex-col space-y-4">
                    
                    {#if project.period}
                        <span class="text-sm font-bold text-blue-600 tracking-widest uppercase">{project.period}</span>
                    {/if}

                    <h3 class="text-3xl font-bold">{project.title}</h3>
                    
                    <p class="text-lg text-gray-600 leading-relaxed">
                        {project.description}
                    </p>

                    <div class="flex flex-wrap gap-2 pt-2">
                        {#each project.tags as tag}
                            <span class="text-xs font-bold uppercase tracking-widest bg-gray-100 px-3 py-1 rounded-full">{tag}</span>
                        {/each}
                    </div>

                    <div class="flex items-center space-x-6 pt-4">
                        {#if project.github}
                            <a href={project.github} target="_blank" class="text-gray-400 hover:text-black transition-colors" title="View Source">
                                <Icon icon="mdi:github" width="28" height="28" />
                            </a>
                        {/if}
                        {#if project.link}
                            <a href={project.link} target="_blank" class="inline-flex items-center font-bold text-black hover:translate-x-2 transition-transform">
                                View Work <span class="ml-2">→</span>
                            </a>
                        {/if}

                    </div>
                </div>

                <div class="{i % 2 === 0 ? 'order-1 md:order-2' : 'order-1'} overflow-hidden rounded-xl border-4 border-black bg-gray-100 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] {i % 2 !== 0 ? 'md:shadow-[-12px_12px_0px_0px_rgba(0,0,0,1)]' : ''}">
                    <img 
                        src={project.img} 
                        alt={project.title} 
                        class="w-full h-auto object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                    />
                </div>
            </div>

            {#if i < projects.length - 1}
                <div class="flex justify-center">
                    <div class="w-24 h-1 bg-gray-100"></div>
                </div>
            {/if}
        {/each}
    </div>
</section>