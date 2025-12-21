<script lang="ts">
    import { 
        Navbar, 
        NavBrand, 
        NavUl, 
        NavLi,
		Badge,
		Button,
		NavHamburger, 
    } from 'flowbite-svelte';

    import pplayLogo from '$lib/static/img/Isotipo-principal-Patrón-Play---JPG.jpg';

    let { children, data } = $props();

    let user = $derived(data.user);
</script>

<Navbar class="border-b-1 border-zinc-900 ">
    <NavBrand href="/">
        <img src="{pplayLogo}" width=45 alt="Patronplay logo"/>
        <span class="self-center whitespace-nowrap text-xl font-bold text-white">Patrón Play</span>
    </NavBrand>

    <div class="flex md:order-2 items-center gap-4">
        {#if user}
            <div class="flex flex-col items-end mr-4">
                <span class="text-[10px] text-gray-500 uppercase font-black tracking-tighter leading-none">Tu saldo</span>
                <Badge color="green" class="font-mono text-md border border-green-500/20 bg-green-500/10 text-green-400">
                    ${Number(user.tokens ?? 0).toLocaleString('es-CO')}
                </Badge>
            </div>

            <div class="hidden sm:block text-right">
                <p class="text-xs text-zinc-500">Hola,</p>
                <p class="text-sm font-bold text-white leading-none">{user?.username}</p>
            </div>
        {:else}
            <Button size="sm" color="blue" href="/login">Ingresar</Button>
        {/if}
        <NavHamburger class="text-white!"/>
    </div>

    <NavUl class="white">
        {#if user}    
            <NavLi href="/orders">Mis Pedidos</NavLi>
        {/if}
        <NavLi href="/about">Nosotros</NavLi>
        <NavLi href="/terms-and-conditions">Términos y condiciones</NavLi>
        <NavLi href="/gptcodespage">Página de códigos</NavLi>
    </NavUl>
    
</Navbar>

<main class="min-h-screen"><!-- bg-stone-950" -->
    {@render children()}
</main>