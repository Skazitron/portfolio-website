<footer class="bg-white border-t-8 border-black pt-16 pb-8 px-6 lg:px-10 mt-20 relative z-10 selection:bg-black selection:text-white">
    <div class="max-w-400 mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
        
        <div class="flex flex-col items-center md:items-start text-center md:text-left">
            <h2 class="animate-tilt text-3xl md:text-5xl font-black uppercase tracking-tighter mb-2 bg-yellow-300 inline-block px-2 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                Shahir Kazi
            </h2>
            <p class="font-bold text-black uppercase text-sm tracking-widest mt-4">
                © {new Date().getFullYear()} All Rights Reserved.
            </p>
            <p class="font-bold text-gray-500 text-xs mt-1 uppercase">
                Built with Svelte & An Excellent Sense of Design.
            </p>
        </div>

        <div class="flex flex-wrap justify-center gap-4">
            <a href="https://github.com/Skazitron" target="_blank" aria-label="GitHub" class="px-6 py-3 bg-white text-black font-black uppercase border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1.5 hover:translate-y-1.5 hover:bg-black hover:text-white transition-all">
                GitHub
            </a>
            <a href="https://www.linkedin.com/in/arnobkazi/" target="_blank" aria-label="LinkedIn" class="px-6 py-3 bg-blue-500 text-white font-black uppercase border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1.5 hover:translate-y-1.5 hover:bg-black transition-all">
                LinkedIn
            </a>
        </div>
    </div>

    <div class="mt-16 flex justify-center border-t-4 border-dashed border-black pt-8 max-w-[1600px] mx-auto">
        <button 
            onclick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            class="inline-block bg-black text-white px-6 py-2 font-black uppercase tracking-widest text-sm hover:bg-yellow-300 hover:text-black hover:scale-110 transition-all border-4 border-transparent hover:border-black cursor-pointer"
        >
            ↑ Back to Top
        </button>
    </div>
</footer>

<style>
    @keyframes tilt {
        0%, 100% { transform: rotate(-2deg); }
        50% { transform: rotate(2deg); }
    }

    .animate-tilt {
        animation: tilt 2s infinite ease-in-out;
    }
</style>