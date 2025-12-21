<script lang='ts'>
    import "../app.css";
	import type { PageProps } from './$types';
	import WorkInProgress from './WorkInProgress.svelte';
    import ServiceCard from "$lib/components/ServiceCard.svelte";
    import netflixImg from '$lib/static/img/icons/Netflix-symbol.webp';
    import { Heading } from 'flowbite-svelte';
	

    let { data }: PageProps = $props();

    // Safety check for services
    const PAYLOAD_URL = data.payloadServer;
    let services  = data.collection?.docs ?? [];    // Services collection
    let { user } = data;    // user session

    console.log("Payload URL:", PAYLOAD_URL);
    console.log("Service img url:", services[0].image.url);

    // Derived user role, gives client if no role found
    let userRole: 'client' | 'distributor' = 
        user?.roles?.includes('distributor') ? 'distributor' : 'client';

    // Typechecks tokens as number
    let userBalance = $state(Number(user?.tokens ?? 0));
</script>


<!-- Only users allowed to see prices for now -->
{#if user}
    <div class="text-center mt-4">
        <Heading tag="h1" class="mb-4 text-4xl font-extrabold lg:text-6xl text-white!">Servicios de Streaming</Heading>
        <p class="mb-6 text-lg lg:text-xl text-gray-300!">Donde encuentras las mejores cuentas. Entrega inmediata</p>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-4 sm:px-10 md:px-20 py-10">
        {#each services as service}
            <ServiceCard  
                userBalance={userBalance ?? 0} 
                img={service.image?.url ? `${PAYLOAD_URL.replace("api", "")}${service.image.url}` : netflixImg} 
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
