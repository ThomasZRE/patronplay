<script lang="ts">
    import { 
        Navbar, 
        NavBrand, 
        NavUl, 
        NavLi, 
    } from 'flowbite-svelte';

    import pplayLogo from '$lib/static/img/Isotipo-principal-Patrón-Play---JPG.jpg';

    let { children, data } = $props();

    let { user } = data;
</script>

<Navbar class="border-b-1 border-zinc-900 ">
    <NavBrand>
        <a href="/">
            <img src="{pplayLogo}" width=45 alt="Patronplay logo"/>
        </a>
    </NavBrand>
    <NavUl class="text-sky-100!">
        <NavLi href="/about">About</NavLi>
        <NavLi href="/terms-and-conditions">TOS</NavLi>
        <NavLi href="/gptcodespage">Codepages</NavLi>
        {#if user}
            <NavLi>Bienvenid@ {user.username}</NavLi>
        {:else}
            <NavLi href="/login">Login</NavLi>
        {/if}
    </NavUl>
</Navbar>

{@render children()}