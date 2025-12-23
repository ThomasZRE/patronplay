<script lang="ts">
    import { page } from '$app/stores';
    import "../app.css";
    import pplayLogo from '$lib/static/pplay_christmas.png';
    import { applyAction, enhance } from '$app/forms';

    let { children, data } = $props();

    let user = $derived(data.user);
    let isMenuOpen = $state(false);

    // Active link helper
    const isActive = (path: string) => $page.url.pathname === path;
</script>


<nav 
    class="sticky top-0 z-50 w-full border-b border-zinc-900 bg-transparent px-4 py-3"
>
    <div class="mx-auto flex max-w-7xl items-center justify-between">
        
        <a href="/" class="flex items-center gap-3">
            <img src="{pplayLogo}" width="40" class="rounded-lg" alt="Patrón Play logo" />
            <span class="text-xl font-bold text-white xs:block">Beta</span>
        </a>

        <ul class="hidden items-center gap-6 md:flex">
            <li>
                <a href="/" class="text-sm font-medium transition-colors {isActive('/') ? 'text-blue-500' : 'text-zinc-400 hover:text-white'}">Tienda</a>
            </li>
            {#if user}
                <li>
                    <a href="/my-orders" class="text-sm font-medium transition-colors {isActive('/my-orders') ? 'text-blue-500' : 'text-zinc-400 hover:text-white'}">Mis Pedidos</a>
                </li>
            {/if}
            <li>
                <a href="/about" class="text-sm font-medium transition-colors {isActive('/about') ? 'text-blue-500' : 'text-zinc-400 hover:text-white'}">Nosotros</a>
            </li>
            <li hidden>
                <a href="/terms-and-conditions" class="text-sm font-medium transition-colors {isActive('/terms-and-conditions') ? 'text-blue-500' : 'text-zinc-400 hover:text-white'}">Términos y condiciones</a>
            </li>
            <li>
                <a href="/gptcodespage" class="text-sm font-medium transition-colors {isActive('/gptcodespage') ? 'text-blue-500' : 'text-zinc-400 hover:text-white'}">Códigos de ChatGPT</a>
            </li>
        </ul>

        <div class="flex items-center gap-3">
            {#if user}
                <div class="flex flex-col items-end">
                    <span class="text-[9px] font-black uppercase tracking-tighter text-zinc-500 leading-none">Tu Saldo</span>
                    <span class="rounded border border-green-500/20 bg-green-500/10 px-2 py-0.5 font-mono text-xs font-bold text-green-400 sm:text-sm">
                        ${Number(user.tokens ?? 0).toLocaleString('es-CO')}
                    </span>
                </div>

                <div class="hidden flex-col items-end lg:flex">
                    <span class="text-[12px] text-zinc-500 leading-none">Usuario</span>
                    <span class="text-xl font-bold text-white">{user.username}</span>
                </div>

                <form method="POST" action="/logout" use:enhance>
                    <button 
                        type="submit"
                        class="hidden rounded bg-red-600 px-3 py-1.5 text-xs font-bold text-white hover:bg-red-700 sm:block"
                    >   
                        Salir
                    </button>
                </form>
            {:else}
                <a href="/login" class="rounded bg-blue-600 px-4 py-1.5 text-sm font-bold text-white hover:bg-blue-700">Ingresar</a>
            {/if}

            <button 
                onclick={() => isMenuOpen = !isMenuOpen} 
                class="rounded p-2 text-zinc-400 hover:bg-zinc-900 hover:text-white md:hidden"
                aria-label="Menu"
            >
                <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {#if isMenuOpen}
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    {:else}
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
                    {/if}
                </svg>
            </button>
        </div>
    </div>

    {#if isMenuOpen}
        <div class="mt-4 flex flex-col gap-4 border-t border-zinc-900 pt-4 md:hidden">
            <a href="/" class="text-zinc-400 hover:text-white" onclick={() => isMenuOpen = false}>Tienda</a>
            {#if user}
                <a href="/my-orders" class="text-zinc-400 hover:text-white" onclick={() => isMenuOpen = false}>Mis Pedidos</a>
            {/if}
            <a href="/about" class="text-zinc-400 hover:text-white" onclick={() => isMenuOpen = false}>Nosotros</a>
            <a hidden href="/terms-and-conditions" class="text-zinc-400 hover:text-white" onclick={() => isMenuOpen = false}>Términos y condiciones</a>
            <a href="/gptcodespage" class="text-zinc-400 hover:text-white" onclick={() => isMenuOpen = false}>Códigos de ChatGPT</a>
            {#if isMenuOpen && user}
                <!-- TODO: Fix logout redirection-->
                <form method="POST" action="/logout" use:enhance={() => {
                    console.log("[CLIENT] Form submission started");
                    alert("DEBUG: Submitting logout form...");
                    return async ({ result }) => {
                        console.log("[CLIENT] Server response received:", result);
                        alert(`DEBUG: Result Type: ${result.type}, Status: ${result.status}`);
                        
                        isMenuOpen = false;
                        await applyAction(result);

                        console.log("[CLIENT] applyAction finished");                        
                    };
                }}>
                    <button 
                        type="submit"
                        class="rounded bg-red-600 px-3 py-1.5 text-xs font-bold text-white hover:bg-red-700"
                        >
                            Cerrar Sesión
                    </button>
                </form>
            {/if}
        </div>
    {/if}
</nav>

<main 
    class="min-h-screen"   
>
    {@render children()}
</main>