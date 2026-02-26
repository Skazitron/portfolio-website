<script lang="ts">
    import { page } from '$app/state';

    // Move logic into the script block for a cleaner template
    const statusCode = page.status || 500;
    const is404 = statusCode === 404;
    
    // Dynamic copy based on the error type
    const errorBadge = is404 ? "Page Not Found" : "System Error";
    const defaultMessage = is404 
        ? "The page you are looking for has vanished into the void." 
        : "Looks like a segmentation fault. Just kidding, but something definitely broke.";
        
    const errorMessage = page.error?.message || defaultMessage;
</script>

<section class="min-h-[90vh] flex flex-col items-center justify-center px-6 py-20 bg-white selection:bg-black selection:text-white">
    
    <div class="bg-red-400 border-4 border-black rounded-3xl p-10 md:p-20 text-center shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] max-w-4xl w-full flex flex-col items-center relative overflow-hidden group">
        
        <div class="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
            <span class="text-[20rem] font-black leading-none uppercase">{statusCode}</span>
        </div>

        <div class="relative z-10 flex flex-col items-center">
            
            <h1 class="text-7xl md:text-9xl font-black mb-6 tracking-tighter uppercase text-black">
                {statusCode}
            </h1>
            
            <div class="bg-black text-white px-6 py-2 font-black text-xl md:text-2xl uppercase tracking-widest mb-8 border-4 border-black rotate-[-2deg] shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]">
                {errorBadge}
            </div>

            <h2 class="text-3xl md:text-5xl font-black uppercase tracking-tight mb-6 leading-tight">
                Well, this is awkward.
            </h2>
            
            <p class="text-xl font-bold mb-12 text-black max-w-xl leading-relaxed">
                {errorMessage}
            </p>

            <a href="/" class="inline-flex items-center px-10 py-5 bg-yellow-300 text-black text-xl font-black uppercase tracking-widest border-4 border-black rounded-full shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-2 hover:translate-y-2 hover:bg-black hover:text-white transition-all duration-300">
                ← Back to Safety
            </a>
            
        </div>
    </div>
</section>