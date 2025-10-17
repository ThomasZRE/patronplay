<script lang='ts'>
    // TODO: Learn some Typescript
    import "../app.css";
	import type { PageProps } from './$types';

    // Components
	import WorkInProgress from './WorkInProgress.svelte';
    import ServiceCard from "$lib/components/ServiceCard.svelte";

    // Assets
    import netflixImg from '$lib/static/img/icons/Netflix-symbol.webp';

    // Flowbite imports
    import {
        Heading,
        P,
    } from 'flowbite-svelte';
    
    let { data }: PageProps = $props();
    let { docs }  = data.collection;    // Services collection
    let { user } = data;                // user session
</script>


<!-- Only users allowed to see prices for now -->
{#if user}
    <div class="text-center mt-4">
        <Heading tag="h1" class="mb-4 text-4xl font-extrabold lg:text-6xl text-white!">Servicios de Streaming</Heading>
        <p class="mb-6 text-lg lg:text-xl text-gray-300!">Donde encuentras las mejores cuentas. Entrega inmediata</p>
    </div>

    <div class="grid grid-flow-col grid-cols-4 gap-4 mx-25 my-5">
        {#each docs as service}
            <ServiceCard img={netflixImg} name={service.service} price={service.price.toLocaleString('es-CO')} />
        {/each}
    </div>
{:else}
    <WorkInProgress />
{/if}
