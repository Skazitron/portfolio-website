<script lang="ts">
    import { onMount } from "svelte";
    import Icon from "@iconify/svelte";
    import ProjectCard from "../components/ProjectCard.svelte";
    import { slide } from "svelte/transition";

    const experiences = [
        {
            title: "Software Engineer",
            company: "Canonical",
            period: "December 2025 — Present",
            description: "Member of the Web Team, engineering the front-end architecture and high-traffic platforms that power the Ubuntu ecosystem globally.",
            github: "https://github.com/canonical", 
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
            period: "August 2022 — Jan 2024",
            description: "Developed code for the Variate and Circuit educational platforms used by 45,000 students.",
            link: "https://www.purdue.edu/provost/innovation-hub/",
            img: "/images/purdue.jpg",
            tags: ["React", "JavaScript", "Tanstack Query", "C#", ".NET"]
        },
        {
            title: "Operations Specialist",
            company: "Purdue RecWell",
            period: "May 2024 — September 2024",
            description: "Worked as an Operations Specialist at the France A. Cordova Recreation Center — serving over 20,000 patrons a day",
            link: "https://www.purdue.edu/recwell/",
            img: "/images/corec.webp",
            tags: ["First Aid", "CPR", "Teamwork"]
        }
    ];

    const projectsData = [
        { title: "Portfolio Website", description: "The website that you're currently on.", img: "/images/portfolio.png", tags: ["Svelte", "SvelteKit", "Sveltia CMS", "Tailwind CSS"], link: "/" },
    ];

    let showAllExperiences = $state(false);
    let showAllProjectsMobile = $state(false);
    let activeTooltip = $state<string | null>(null);

    let favoriteSkills = [
        "Python", "Numpy", "Polars", "Go", "Rust", 
        "PyTorch", "Svelte", "TypeScript", "PostgresQL", "Apache Druid"
    ];

    let skills = [
        "JavaScript", "TypeScript", "Python", "C++", "C#", "Java", "Swift",
        "Svelte", "Go", "Rust","Tailwind", "Apache Druid", "GitHub Workflows", "CI/CD",
        "NodeJS", "Express", "Scikit-learn", "Scipy", "PyTorch", "Python Polars",
        "React", "React Native", "Vue", "HTML", ".NET", 
        "Docker", "Kubernetes", "Git", "Nginx", "Firebase", 
        "Zustand", "Tanstack Query", 
        "Hardware Troubleshooting", "Software Development", "Data Analysis", "Financial Markets",
        "SQLite", "MongoDB", "PostgresQL"
    ];

    const skillDescriptions: Record<string, string> = {
        "Python": "General-purpose programming language.",
        "Numpy": "Numerical computing library for Python.",
        "Polars": "Lightning-fast data manipulation library.",
        "Go": "Fast, concurrent language by Google.",
        "Rust": "Memory-safe, high-performance language.",
        "PyTorch": "Machine learning and deep learning framework.",
        "Svelte": "Component framework for efficient UIs.",
        "TypeScript": "JavaScript with static type checking.",
        "PostgresQL": "Robust relational database system.",
        "Apache Druid": "Real-time analytics database.",
        "JavaScript": "The standard language of the Web.",
        "C++": "High-performance systems language.",
        "C#": "Microsoft's object-oriented language.",
        "Java": "Popular enterprise and Android language.",
        "Swift": "Apple's language for iOS and macOS.",
        "Tailwind": "Utility-first CSS styling framework.",
        "GitHub Workflows": "Automation for CI/CD pipelines.",
        "CI/CD": "Continuous Integration & Deployment.",
        "NodeJS": "JavaScript runtime for backends.",
        "Express": "Web framework for NodeJS.",
        "Scikit-learn": "Machine learning library for Python.",
        "Scipy": "Scientific computing for Python.",
        "Python Polars": "Lightning-fast data manipulation library.",
        "React": "Popular UI library by Meta.",
        "React Native": "Mobile app framework using React.",
        "Vue": "Approachable frontend framework.",
        "HTML": "Standard markup language for web pages.",
        ".NET": "Microsoft's software framework.",
        "Docker": "Containerization platform for apps.",
        "Kubernetes": "Container orchestration system.",
        "Git": "Version control system for code tracking.",
        "Apache Nginx": "High-performance web server.",
        "Firebase": "Google's backend-as-a-service platform.",
        "Zustand": "Minimalist state management for React.",
        "Tanstack Query": "Powerful asynchronous state management.",
        "Hardware Troubleshooting": "Diagnosing and fixing physical computer issues.",
        "Software Development": "Building and maintaining applications.",
        "Data Analysis": "Extracting insights from complex data.",
        "Financial Markets": "Analyzing stocks and market trends.",
        "SQLite": "Lightweight, file-based database.",
        "MongoDB": "NoSQL document database."
    };

    let showAllSkills = $state(false);

    let canvas: HTMLCanvasElement;
    let ctx: CanvasRenderingContext2D | null;
    let snake = [{x: 200, y: 200}];
    let dx = 20; let dy = 0;
    let foodX = 0; let foodY = 0;
    let gameActive = false;

    function randomTen(min: number, max: number) { 
        return Math.round((Math.random() * (max - min) + min) / 20) * 20; 
    }

    function createFood() {
        if (!canvas) return;
        foodX = randomTen(0, canvas.width - 20);
        foodY = randomTen(0, canvas.height - 20);
    }

    function drawSnakePart(snakePart: {x: number, y: number}) {
        if (!ctx) return;
        ctx.fillStyle = '#4ade80'; 
        ctx.fillRect(snakePart.x, snakePart.y, 20, 20);
        ctx.strokeStyle = '#000';
        ctx.strokeRect(snakePart.x, snakePart.y, 20, 20);
    }

    function drawFood() {
        if (!ctx) return;
        ctx.fillStyle = '#f87171';
        ctx.fillRect(foodX, foodY, 20, 20);
        ctx.strokeStyle = '#000';
        ctx.strokeRect(foodX, foodY, 20, 20);
    }

    function advanceSnake() {
        const head = {x: snake[0].x + dx, y: snake[0].y + dy};
        snake.unshift(head);
        if (snake[0].x === foodX && snake[0].y === foodY) {
            createFood();
        } else {
            snake.pop();
        }
    }

    function clearCanvas() {
        if (!ctx || !canvas) return;
        ctx.fillStyle = "#111827"; 
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    function hasGameEnded() {
        if (!canvas) return true;
        for (let i = 4; i < snake.length; i++) {
            if (snake[i].x === snake[0].x && snake[i].y === snake[0].y) return true;
        }
        const hitLeft = snake[0].x < 0; 
        const hitRight = snake[0].x >= canvas.width;
        const hitTop = snake[0].y < 0; 
        const hitBottom = snake[0].y >= canvas.height;
        return hitLeft || hitRight || hitTop || hitBottom;
    }

    function main() {
        if (hasGameEnded()) {
            gameActive = false;
            if (ctx && canvas) {
                ctx.fillStyle = "rgba(0,0,0,0.5)";
                ctx.fillRect(0, 0, canvas.width, canvas.height);
                ctx.fillStyle = "white";
                ctx.font = "bold 24px monospace";
                ctx.fillText("Game Over! Click to restart.", 20, canvas.height / 2);
            }
            return;
        }
        gameActive = true;
        setTimeout(function onTick() {
            clearCanvas();
            drawFood();
            advanceSnake();
            snake.forEach(drawSnakePart);
            main();
        }, 100);
    }

    onMount(() => {
        if (canvas) {
            ctx = canvas.getContext('2d');
            createFood();
            clearCanvas();
            if (ctx) {
                ctx.fillStyle = "white";
                ctx.font = "bold 24px monospace";
                ctx.fillText("Click to Start Snake", 60, 200);
            }
        }

        window.addEventListener("keydown", function(e) {
            if(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].indexOf(e.code) > -1 && gameActive) {
                e.preventDefault();
            }
        }, false);

        document.addEventListener("keydown", function(event) {
            if (!gameActive) return;
            const LEFT_KEY = 37; const RIGHT_KEY = 39; const UP_KEY = 38; const DOWN_KEY = 40;
            const keyPressed = event.keyCode;
            const goingUp = dy === -20; const goingDown = dy === 20; const goingRight = dx === 20; const goingLeft = dx === -20;
            if (keyPressed === LEFT_KEY && !goingRight) { dx = -20; dy = 0; }
            if (keyPressed === UP_KEY && !goingDown) { dx = 0; dy = -20; }
            if (keyPressed === RIGHT_KEY && !goingLeft) { dx = 20; dy = 0; }
            if (keyPressed === DOWN_KEY && !goingUp) { dx = 0; dy = 20; }
        });
    });

    function startGame() {
        if (!gameActive) {
            snake = [{x: 200, y: 200}]; dx = 20; dy = 0; createFood(); main();
        }
    }

    function toggleTooltip(skill: string, event: Event) {
        event.stopPropagation();
        activeTooltip = activeTooltip === skill ? null : skill;
    }

    function closeTooltips() {
        activeTooltip = null;
    }
</script>

<svelte:window onclick={closeTooltips} />
<section id="hero" class="min-h-[85vh] flex flex-col lg:flex-row items-center justify-center px-6 lg:px-40 py-20 gap-12 lg:gap-20 bg-white selection:bg-black selection:text-white">
    
    <div class="flex flex-col items-center shrink-0 text-center relative mt-10 lg:mt-0">
        <div class="relative group">
            <a href="https://github.com/Skazitron" target="_blank" class="block relative z-10">
                <img 
                    src="/images/cropped_img.jpg" 
                    alt="Shahir Kazi"
                    class="rounded-full w-56 h-56 lg:w-72 lg:h-72 object-cover border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-105 bg-white"
                />
                <span class="absolute bottom-0 right-0 text-6xl animate-bounce-slow cursor-default drop-shadow-[4px_4px_0px_rgba(0,0,0,1)] animate-tilt" title="Hello!">👋</span>
            </a>
            </div>

        <a href="https://github.com/Skazitron" target="_blank" class="no-underline mt-10 relative z-20 block hover:-translate-y-1 hover:-translate-x-1 transition-transform">
            <div class="bg-yellow-300 border-4 border-black px-6 py-2 font-black text-sm uppercase tracking-widest text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rotate-[-2deg] hover:rotate-0 transition-transform">
                Software Engineer @ Canonical
            </div>
        </a>
    </div>

    <div class="flex flex-col max-w-2xl text-center lg:text-left z-10">
        <h1 class="text-4xl lg:text-6xl font-black leading-tight tracking-tighter text-black uppercase">
            Hey, I'm Shahir. 
            
            <span class="block text-2xl lg:text-4xl font-black mt-6 leading-[1.8] text-black">
                I&nbsp;engineer
                
                <span class="inline-block bg-blue-500 text-white border-4 border-black px-3 py-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rotate-[-2deg] hover:rotate-1 transition-transform cursor-default mx-1 my-2 lg:my-3">
                    high-performance interfaces
                </span> 
                
                and 
                
                <span class="inline-block bg-red-400 text-black border-4 border-black px-3 py-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rotate-[1deg] hover:-rotate-1 transition-transform cursor-default mx-1 my-2 lg:my-3">
                    open-source ecosystems
                </span>.
            </span>
        </h1>
        
        <p class="mt-10 text-lg lg:text-xl text-black font-bold leading-relaxed max-w-xl mx-auto lg:mx-0 border-l-8 border-yellow-300 pl-6">
            Hey there! I'm an engineer on Canonical's Web Team who loves tinkering with different technologies. In my free time, I'm probably lifting, reading, or bingeing Lovecraftian horror movies.
        </p>

        <div class="pt-12 flex flex-col sm:flex-row justify-center lg:justify-start gap-6">
            <a href="#experience" class="px-8 py-4 bg-black text-white text-base lg:text-lg font-black uppercase tracking-widest border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1.5 hover:translate-y-1.5 hover:bg-yellow-300 hover:text-black transition-all">
                View Experience ↓
            </a>
            <a href="#about" class="px-8 py-4 bg-white text-black text-base lg:text-lg font-black uppercase tracking-widest border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1.5 hover:translate-y-1.5 hover:bg-red-400 transition-all">
                More About Me
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
                        <p class="text-lg text-gray-600 leading-relaxed">{exp.description}</p>
                        <div class="flex flex-wrap gap-2 pt-2">
                            {#each exp.tags as tag}
                                <span class="text-xs font-bold uppercase tracking-widest bg-gray-100 px-3 py-1 rounded-full">{tag}</span>
                            {/each}
                        </div>
                        <div class="flex flex-wrap items-center gap-4 pt-4 mt-2">
                            {#if exp.github}
                                <a href={exp.github} target="_blank" class="inline-flex items-center px-5 py-2.5 bg-white text-black font-bold border-2 border-black rounded-full shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-y-1 hover:translate-x-1 transition-all">
                                    <Icon icon="mdi:github" width="22" height="22" class="mr-2" /> GitHub
                                </a>
                            {/if}
                            {#if exp.link}
                                <a href={exp.link} target="_blank" class="group/btn inline-flex items-center px-6 py-2.5 bg-black text-white font-bold border-2 border-black rounded-full shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-y-1 hover:translate-x-1 hover:bg-gray-800 transition-all">
                                    View Work <span class="ml-2 group-hover/btn:translate-x-1 transition-transform">→</span>
                                </a>
                            {/if}
                        </div>
                    </div>
                    <div class="{i % 2 === 0 ? 'order-1 md:order-2' : 'order-1'} overflow-hidden rounded-xl border-4 border-black bg-white shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] {i % 2 !== 0 ? 'md:shadow-[-12px_12px_0px_0px_rgba(0,0,0,1)]' : ''}">
                        <img src={exp.img} alt={exp.company} class={`w-full h-auto object-cover transition-all duration-500 ${exp.decorator ? exp.decorator : 'group-hover:scale-105'}`} />
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
            <button onclick={() => showAllExperiences = !showAllExperiences} class="px-8 py-4 border-4 border-black bg-white text-black font-black uppercase tracking-widest hover:bg-black hover:text-white transition-all duration-300 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-y-1 hover:translate-x-1">
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
                <ProjectCard title={proj.title} description={proj.description} image={proj.img} tags={proj.tags} link={proj.link} />
            </div>
        {/each}
    </div>

    {#if projectsData.length > 2}
        <div class="flex md:hidden justify-center mt-12">
            <button onclick={() => showAllProjectsMobile = !showAllProjectsMobile} class="px-8 py-4 border-4 border-black bg-white text-black font-black uppercase tracking-widest hover:bg-black hover:text-white transition-all duration-300 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-y-1 hover:translate-x-1">
                {showAllProjectsMobile ? 'Show Less ↑' : 'View All Projects ↓'}
            </button>
        </div>
    {/if}
</section>

<section id="about" class="px-6 md:px-12 lg:px-40 py-20 bg-white text-gray-800">
    <h2 class="text-5xl font-black mb-16 tracking-tighter italic uppercase text-black">About Me</h2>
    
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="col-span-1 md:col-span-2 bg-blue-50 border-4 border-black rounded-2xl p-6 md:p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all duration-300 flex flex-col justify-between">    <div>
                <div class="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-3 md:gap-2">
                    <h3 class="text-3xl font-black uppercase tracking-tight">Education</h3>
                    <span class="text-xs md:text-sm font-bold bg-black text-white px-3 py-1 rounded-full uppercase tracking-widest w-fit border-2 border-black">Aug 2020 — May 2025</span>
                </div>
                
                <h4 class="text-xl md:text-2xl font-bold mb-5 leading-normal">
                    <span class="bg-blue-200 px-2 py-1 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] inline-block">B.S. in Computer Science</span>
                </h4>
                
                <div class="text-base md:text-lg font-medium leading-relaxed mb-6 text-gray-800">
                    <span class="italic font-semibold text-black">
                        Purdue University, West Lafayette, IN
                    </span> 
                    <br>
                    Focused on low-level system architecture, high-performance computing, and scalable software design. Bridged the gap between hardware boundaries and software execution through rigorous technical application and environment optimization.
                </div>
            </div>
        
            <div>
                <h5 class="text-sm font-black uppercase tracking-widest text-gray-500 mb-3 mt-2">Relevant Coursework</h5>
                <div class="flex flex-wrap gap-2">
                    <span class="px-3 py-1 bg-white border-2 border-black rounded-md font-bold text-xs md:text-sm shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">Operating Systems</span>
                    <span class="px-3 py-1 bg-white border-2 border-black rounded-md font-bold text-xs md:text-sm shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">Computer Architecture</span>
                    <span class="px-3 py-1 bg-white border-2 border-black rounded-md font-bold text-xs md:text-sm shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">Systems Programming</span>
                    <span class="px-3 py-1 bg-white border-2 border-black rounded-md font-bold text-xs md:text-sm shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">Data Structures & Algorithms</span>
                    <span class="px-3 py-1 bg-white border-2 border-black rounded-md font-bold text-xs md:text-sm shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">Distributed Systems</span>
                </div>
            </div>
        </div>

        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" class="group relative col-span-1 bg-red-400 border-4 border-black rounded-2xl p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all duration-300 overflow-hidden flex flex-col justify-center items-center text-center cursor-pointer">
            <div class="absolute inset-0 bg-red-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
            <span class="relative z-10 text-4xl mb-2">🤫</span>
            <h3 class="relative z-10 text-2xl font-black text-white uppercase tracking-tight">Classified Project</h3>
            <p class="relative z-10 text-red-100 font-bold mt-2 opacity-0 group-hover:opacity-100 transition-opacity delay-100">Do not click...</p>
        </a>

        <div class="col-span-1 md:col-span-3 bg-yellow-50 border-4 border-black rounded-2xl p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300">
            <h3 class="text-3xl font-black mb-8 uppercase tracking-tight">Technical Arsenal</h3>
            
            <div class="mb-8">
                <h4 class="text-lg font-black uppercase tracking-widest text-gray-500 mb-4 border-b-4 border-black inline-block pb-1">Top Picks</h4>
                <div class="flex flex-wrap gap-3 mt-2">
                    {#each favoriteSkills as skill}
                        <div class="relative inline-block">
                            <button onclick={(e) => toggleTooltip(skill, e)} class="px-5 py-2 bg-blue-300 border-2 border-black rounded-full font-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 hover:bg-yellow-400 transition-all cursor-pointer">
                                {skill} ⭐
                            </button>
                            {#if activeTooltip === skill}
                                <div class="absolute z-50 bottom-full left-1/2 -translate-x-1/2 mb-3 w-48 p-3 bg-black text-white text-sm font-bold border-2 border-gray-400 rounded-lg shadow-xl text-center pointer-events-none">
                                    {skillDescriptions[skill] || 'A core technology.'}
                                    <div class="absolute top-full left-1/2 -translate-x-1/2 border-[6px] border-transparent border-t-black"></div>
                                </div>
                            {/if}
                        </div>
                    {/each}
                </div>
            </div>
            <div>
                <h4 class="text-lg font-black uppercase tracking-widest text-gray-500 mb-4 border-b-4 border-black inline-block pb-1">Languages & Tools</h4>
                <div class="flex flex-wrap gap-3 mt-2">
                    {#each skills as skill, i}
                        <div class="relative {i > 5 && !showAllSkills ? 'hidden md:inline-block' : 'inline-block'}">
                            <button onclick={(e) => toggleTooltip(skill, e)} class="px-4 py-2 bg-white border-2 border-black rounded-full font-bold shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 hover:bg-gray-100 transition-all cursor-pointer">
                                {skill}
                            </button>
                            {#if activeTooltip === skill}
                                <div class="absolute z-50 bottom-full left-1/2 -translate-x-1/2 mb-3 w-48 p-3 bg-black text-white text-sm font-bold border-2 border-gray-400 rounded-lg shadow-xl text-center pointer-events-none">
                                    {skillDescriptions[skill] || 'A valuable tool in the stack.'}
                                    <div class="absolute top-full left-1/2 -translate-x-1/2 border-[6px] border-transparent border-t-black"></div>
                                </div>
                            {/if}
                        </div>
                    {/each}
                    
                    {#if !showAllSkills && skills.length > 6}
                        <button 
                            onclick={() => showAllSkills = true} 
                            class="md:hidden px-4 py-2 bg-yellow-300 border-2 border-black rounded-full font-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all cursor-pointer"
                        >
                            + {skills.length - 6} More
                        </button>
                    {/if}
                </div>
            </div>
        </div>

        <div class="col-span-1 bg-pink-50 border-4 border-black rounded-2xl p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all duration-300 flex flex-col">
            <h3 class="text-3xl font-black uppercase tracking-tight border-b-4 border-black pb-3 mb-6">AFK</h3>
            
            <div class="space-y-6">
                <div>
                    <h4 class="text-lg font-black uppercase tracking-widest flex items-center gap-2">
                        <span class="text-2xl">🏋️‍♂️</span> Iron & Sweat
                    </h4>
                    <p class="text-md font-medium text-gray-801 mt-2 leading-snug">
                        Regularly moving heavy circles at the Córdova Rec Center. 
                    </p>
                    <div class="bg-black text-white px-3 py-1 mt-2 inline-block font-bold border-2 border-black -rotate-2 shadow-[2px_2px_0px_0px_rgba(255,105,180,1)]">
                        Incline Bench PR: 285 lbs
                    </div>
                    <p class="text-md italic font-medium text-gray-700 leading-snug mt-4">
                        Note: my display picture is a little outdated.
                    </p>
                    
                </div>

                <div>
                    <h4 class="text-lg font-black uppercase tracking-widest flex items-center gap-2">
                        <span class="text-2xl">🍿</span> Favorite Movies
                    </h4>
                    <p class="text-md font-medium text-gray-800 mt-2 leading-snug">
                        I'm a huge fan of surrealist 80s and 90s horror movies. If you are a fan of films like <span class="font-black italic text-black">Prince of Darkness</span>, I'm your guy.
                        Literally any Sam Neill horror movie will suffice.
                    </p>
                </div>

                <div>
                    <h4 class="text-lg font-black uppercase tracking-widest flex items-center gap-2">
                        <span class="text-2xl">☕</span> Current Hyperfixations
                    </h4>
                    <p class="text-md font-medium text-gray-800 mt-2 leading-snug">
                        <span class="text-black font-bold">Quantitative Analysis of Financial Markets</span> and 
                        building an all-encompassing framework of the Ego and identity — <span class="text-black font-bold">Psychology</span>.
                    </p>
                </div>

            </div>
        </div>

        <div class="col-span-1 md:col-span-2 bg-gray-100 border-4 border-black rounded-2xl p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col md:flex-row items-center gap-8 transition-all duration-300">
            <div class="flex-1">
                <h3 class="text-3xl font-black mb-4 uppercase tracking-tight">Take a Break</h3>
                <p class="text-lg font-medium mb-4">Click inside the arcade screen and use your arrow keys to beat your high score.</p>
            </div>
            <div class="border-4 border-black rounded-xl overflow-hidden shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-black shrink-0">
                <canvas bind:this={canvas} width="400" height="400" class="bg-gray-900 cursor-pointer w-62.5 h-62.5 md:w-75 md:h-75" onclick={startGame}></canvas>
            </div>
        </div>
    </div>
    
    <div class="mt-20 scroll-mt-32" id="hire-me">
        <div class="bg-black text-white rounded-3xl p-12 text-center border-4 border-black shadow-[12px_12px_0px_0px_rgba(200,200,200,1)] relative overflow-hidden group">
            <div class="absolute inset-0 bg-blue-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></div>
            
            <div class="relative z-10 flex flex-col items-center">
                <h3 class="text-4xl md:text-5xl font-black mb-10 tracking-tight uppercase">Have some work in mind for me?</h3>
                
                <div class="flex flex-wrap justify-center gap-6">
                    <a href="https://www.linkedin.com/in/arnobkazi/" target="_blank" class="inline-flex items-center gap-2 bg-white text-black text-xl font-black uppercase py-4 px-8 rounded-full border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 hover:bg-blue-300 transition-all">
                        <Icon icon="devicon:linkedin" width="28" height="28" />
                        LinkedIn
                    </a>

                    <a href="/resume.pdf" target="_blank" class="inline-flex items-center gap-2 bg-white text-black text-xl font-black uppercase py-4 px-8 rounded-full border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 hover:bg-green-300 transition-all">
                        <Icon icon="mdi:file-document-outline" width="28" height="28" />
                        Resume
                    </a>
                </div>
            </div>
        </div>
    </div>
</section>

<style>
    @keyframes tilt {
        0%, 100% { transform: rotate(-5deg); }
        50% { transform: rotate(5deg); }
    }

    .animate-tilt {
        animation: tilt 2s infinite ease-in-out;
    }
</style>