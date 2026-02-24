<script lang="ts">
    const projects = [
        {
            title: "Canonical Web Architecture",
            description: "Developing robust front-end systems and component libraries that power the Ubuntu ecosystem. Focused on accessibility, performance, and global scale.",
            link: "https://ubuntu.com",
            img: "/images/project1.jpg", // Replace with your paths
            tags: ["Svelte", "Vanilla", "Python"]
        },
        {
            title: "Open Source Tooling",
            description: "A collection of developer-centric tools designed to streamline workflows within the Linux community. Built with a focus on reliability and clean CLI patterns.",
            link: "https://github.com/Skazitron",
            img: "/images/project2.jpg",
            tags: ["Go", "React", "Docker"]
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
                <span class="font-black text-blue-700 bg-blue-50 px-2 py-1 rounded-md">scalable web platforms</span> 
                and 
                <span class="font-black text-red-700 bg-red-50 px-2 py-1 rounded-md">digital experiences</span>.
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
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center group">
            <div class="order-2 md:order-1 flex flex-col space-y-6">
                <h3 class="text-3xl font-bold">{projects[0].title}</h3>
                <p class="text-lg text-gray-600 leading-relaxed">
                    {projects[0].description}
                </p>
                <div class="flex gap-2">
                    {#each projects[0].tags as tag}
                        <span class="text-xs font-bold uppercase tracking-widest bg-gray-100 px-3 py-1 rounded-full">{tag}</span>
                    {/each}
                </div>
                <a href={projects[0].link} target="_blank" class="inline-flex items-center font-bold text-black group-hover:translate-x-2 transition-transform">
                    View Project <span class="ml-2">→</span>
                </a>
            </div>
            <div class="order-1 md:order-2 overflow-hidden rounded-xl border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] bg-gray-100">
                <img 
                    src={projects[0].img} 
                    alt={projects[0].title} 
                    class="w-full h-auto object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                />
            </div>
        </div>

        <div class="flex justify-center">
            <div class="w-24 h-1 bg-gray-200"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center group">
            <div class="overflow-hidden rounded-xl border-4 border-black shadow-[-12px_12px_0px_0px_rgba(0,0,0,1)] bg-gray-100">
                <img 
                    src={projects[1].img} 
                    alt={projects[1].title} 
                    class="w-full h-auto object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                />
            </div>
            <div class="flex flex-col space-y-6">
                <h3 class="text-3xl font-bold">{projects[1].title}</h3>
                <p class="text-lg text-gray-600 leading-relaxed">
                    {projects[1].description}
                </p>
                <div class="flex gap-2">
                    {#each projects[1].tags as tag}
                        <span class="text-xs font-bold uppercase tracking-widest bg-gray-100 px-3 py-1 rounded-full">{tag}</span>
                    {/each}
                </div>
                <a href={projects[1].link} target="_blank" class="inline-flex items-center font-bold text-black group-hover:translate-x-2 transition-transform">
                    View Project <span class="ml-2">→</span>
                </a>
            </div>
        </div>
    </div>
</section>