<script lang="ts">
    import Icon from "@iconify/svelte";
    import ProjectCard from "../components/ProjectCard.svelte";
    import { slide } from "svelte/transition"; // Added for smooth dropdown animation

    const experiences = [
        {
            title: "Software Engineer",
            company: "Canonical",
            period: "December 2025 — Present",
            description: "Member of the Web Team, engineering the front-end architecture and high-traffic platforms that power the Ubuntu ecosystem globally.",
            github: "https://github.com/canonical", 
            link: "https://github.com/canonical",
            img: "/images/canonical_wallpaper.jpg",
            tags: ["JavaScript", "Vanilla", "Python", "Go", "Kubernetes", "Docker", "HTML"]
        },
        {
            title: "Mobile SWE",
            company: "Bangshi LLC",
            period: "October 2024 — September 2025",
            description: "Developed the Pallio platform — a peer-to-peer cross platform iOS and Android app for sharing lightweight data.",
            link: "",
            img: "/images/pallio.png",
            tags: ["React Native", "Swift", "Java", "Firebase", "Zustand"],
            decorator: "scale-60 group-hover:scale-65"
        },
        {
            title: "Software Development Intern",
            company: "Purdue University",
            period: "October 2024 — September 2025",
            description: "Developed code for the Variate and Circuit educational platforms.",
            link: "https://www.purdue.edu/provost/innovation-hub/",
            img: "/images/purdue.jpg",
            tags: ["React", "JavaScript", "Tanstack Query", "C#", ".NET"]
        },
        // Added a 4th placeholder so you can test the "Show More" button! 
        {
            title: "Previous Role",
            company: "Some Company",
            period: "June 2023 — August 2024",
            description: "This is a hidden role that will appear when you click Show More.",
            link: "",
            img: "/images/placeholder.jpg",
            tags: ["Tech A", "Tech B"]
        }
    ];

    const projectsData = [
        { title: "Project One", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ", img: "/images/project1.jpg", tags: ["Svelte", "Rust", "Go"], link: "#" },
        { title: "Project Two", description: "Description here.", img: "/images/project2.jpg", tags: ["React"], link: "#" },
        { title: "Project Three", description: "This is hidden on mobile until clicked.", img: "/images/project3.jpg", tags: ["Vue"], link: "#" },
        { title: "Project Four", description: "This is hidden on mobile until clicked.", img: "/images/project4.jpg", tags: ["Go"], link: "#" },
        { title: "Project Five", description: "This is hidden on mobile until clicked.", img: "/images/project5.jpg", tags: ["Rust"], link: "#" }
    ];

    let showAllExperiences = $state(false);
    let showAllProjectsMobile = $state(false);
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
                <span class="font-black text-blue-700 bg-blue-50 hover:bg-blue-100 px-2 py-1 transition-colors rounded-md cursor-default">scalable web platforms</span> 
                and 
                <span class="font-black text-red-700 bg-red-50 hover:bg-red-100 transition-colors px-2 py-1 rounded-md cursor-default">digital experiences</span>.
            </span>
        </h1>
        
        <p class="text-xl text-gray-700 leading-relaxed font-medium max-w-lg mx-auto lg:mx-0">
            I build the front-end architecture and high-traffic platforms that connect millions of users to the open-source ecosystem.
            In my free time, I'm likely lifting, reading, or watching Lovecraftian horror.
        </p>

        <div class="pt-6 flex flex-wrap justify-center lg:justify-start gap-4">
            <a href="#experience" class="px-8 py-4 bg-black text-white text-lg rounded-full hover:bg-gray-800 transition hover:-translate-y-1 shadow-lg font-bold">
                View Experience ↓
            </a>
            <a href="#about" class="px-8 py-4 bg-white text-black text-lg border-2 border-black rounded-full hover:bg-gray-50 transition hover:-translate-y-1 font-bold">
                More about me
            </a>
        </div>
    </div>
</section>

<div class="px-6 lg:px-40 md:px-12">
    <hr class="border-t-4 border-black w-full" />
</div>

<section id="experience" class="px-6 lg:px-40 md:px-12 py-20 bg-white">
    <h2 class="text-5xl font-black mb-20 tracking-tighter italic uppercase">Experience</h2>
    
    <div class="space-y-32">
        {#each experiences as exp, i}
            {#if i < 3 || showAllExperiences}
                <div transition:slide={{ duration: 400 }} class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center group">
                    
                    <div class="{i % 2 === 0 ? 'order-2 md:order-1' : 'order-2'} flex flex-col space-y-4">
                        {#if exp.period}
                            <span class="text-sm font-bold text-blue-600 tracking-widest uppercase">{exp.period}</span>
                        {/if}

                        <div class="flex flex-col space-y-1">
                            <h3 class="text-3xl font-bold">{exp.title}</h3>
                            <h4 class="text-xl font-medium text-gray-500">{exp.company}</h4>
                        </div>
                        
                        <p class="text-lg text-gray-600 leading-relaxed">
                            {exp.description}
                        </p>

                        <div class="flex flex-wrap gap-2 pt-2">
                            {#each exp.tags as tag}
                                <span class="text-xs font-bold uppercase tracking-widest bg-gray-100 px-3 py-1 rounded-full">{tag}</span>
                            {/each}
                        </div>

                        <div class="flex items-center space-x-6 pt-4">
                            {#if exp.github}
                                <a href={exp.github} target="_blank" class="text-gray-400 hover:text-black transition-colors" title="View Source">
                                    <Icon icon="mdi:github" width="28" height="28" />
                                </a>
                            {/if}
                            {#if exp.link}
                                <a href={exp.link} target="_blank" class="inline-flex items-center font-bold text-black hover:translate-x-2 transition-transform">
                                    View Work <span class="ml-2">→</span>
                                </a>
                            {/if}
                        </div>
                    </div>

                    <div class="{i % 2 === 0 ? 'order-1 md:order-2' : 'order-1'} overflow-hidden rounded-xl border-4 border-black bg-white shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] {i % 2 !== 0 ? 'md:shadow-[-12px_12px_0px_0px_rgba(0,0,0,1)]' : ''}">
                        <img 
                            src={exp.img} 
                            alt={exp.company} 
                            class={`w-full h-auto object-cover transition-all duration-500 ${exp.decorator ? exp.decorator : 'group-hover:scale-105'}`}
                        />
                    </div>
                </div>

                {#if i < (showAllExperiences ? experiences.length - 1 : Math.min(2, experiences.length - 1))}
                    <div class="flex justify-center" transition:slide={{ duration: 400 }}>
                        <div class="w-24 h-1 bg-gray-100"></div>
                    </div>
                {/if}
            {/if}
        {/each}
    </div>

    {#if experiences.length > 3}
        <div class="flex justify-center mt-20">
            <button 
                onclick={() => showAllExperiences = !showAllExperiences} 
                class="px-8 py-4 border-4 border-black bg-white text-black font-black uppercase tracking-widest hover:bg-black hover:text-white transition-all duration-300 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-y-1 hover:translate-x-1"
            >
                {showAllExperiences ? 'Collapse History ↑' : 'View Full History ↓'}
            </button>
        </div>
    {/if}
</section>


<div class="px-6 lg:px-40 md:px-12">
    <hr class="border-t-4 border-black w-full" />
</div>


<section id="projects" class="px-6 md:px-12 lg:px-40 py-20 bg-white">
    <h2 class="text-5xl font-black mb-20 tracking-tighter italic uppercase">Projects</h2>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
        {#each projectsData as proj, i}
            <div class="w-full max-w-100 {(!showAllProjectsMobile && i >= 2) ? 'hidden md:flex' : 'flex'} justify-center">
                <ProjectCard 
                    title={proj.title}
                    description={proj.description}
                    image={proj.img}
                    tags={proj.tags}
                    link={proj.link}
                />
            </div>
        {/each}
    </div>

    {#if projectsData.length > 2}
        <div class="flex md:hidden justify-center mt-12">
            <button 
                onclick={() => showAllProjectsMobile = !showAllProjectsMobile} 
                class="px-8 py-4 border-4 border-black bg-white text-black font-black uppercase tracking-widest hover:bg-black hover:text-white transition-all duration-300 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-y-1 hover:translate-x-1"
            >
                {showAllProjectsMobile ? 'Show Less ↑' : 'View All Projects ↓'}
            </button>
        </div>
    {/if}
</section>

<section id="about" class="px-6 md:px-12 lg:px-40 py-20 bg-white">
    <h2 class="text-5xl font-black mb-20 tracking-tighter italic uppercase">About Me</h2>
    <div>
        <h3>Educational History</h3>
    </div>
    <div>
        <h3>Skills</h3>
    </div>
    <div>
        <h3>Interests</h3>
    </div>
    <div>
        <h3>Hire me section</h3>
    </div>
</section>