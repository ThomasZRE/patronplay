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
    import { Heading } from 'flowbite-svelte';
    
    let { data }: PageProps = $props();

    // Safety check for services
    let services  = data.collection?.docs ?? [];    // Services collection
    let { user } = data;    // user session

    // Derived user role, gives client if no role found
    let userRole: 'client' | 'distributor' = 
        user?.roles?.includes('distributor') ? 'distributor' : 'client';

    // Typechecks tokens as number
    let userBalance = $state(Number(user?.tokens ?? 0));
    console.log("Current roles for user:", userRole);
</script>


<!-- Only users allowed to see prices for now -->
{#if user}
    <div class="text-center mt-4">
        <Heading tag="h1" class="mb-4 text-4xl font-extrabold lg:text-6xl text-white!">Servicios de Streaming</Heading>
        <p class="mb-6 text-lg lg:text-xl text-gray-300!">Donde encuentras las mejores cuentas. Entrega inmediata</p>
    </div>

    <div class="grid grid-flow-col grid-cols-4 gap-4 mx-25 my-5">
        {#each services as service}
            <ServiceCard  
                userBalance={userBalance ?? 0} 
                img={netflixImg} 
                name={service.service} 
                price={service.price[userRole] ?? 0}
                userId={String(user.id)}
                serviceId={String(service.id)}
                stock={Number(service.stock ?? 0)}
            />
        {/each}
    </div>
{:else}
    <WorkInProgress />
{/if}
