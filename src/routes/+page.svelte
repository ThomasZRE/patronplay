<script lang='ts'>
    import "../app.css";
	import type { PageProps } from './$types';
	import WorkInProgress from './WorkInProgress.svelte';
    import ServiceCard from "$lib/components/ServiceCard.svelte";
    import netflixImg from '$lib/static/img/netflix_img.png';
    import { Heading } from 'flowbite-svelte';

    let { data }: PageProps = $props();

    const getImg = (path: string) => {
        return new URL(path, import.meta.url).href;
    } 


    // Image dictionary
    let img = {
        'Netflix': '../lib/static/img/netflix_img.png',
        'Disney Plus': '../lib/static/img/disney_premium_img.png',
        'Prime Video': '../lib/static/img/prime_img.png',
        'ChatGPT': '../lib/static/img/chatgpt_img.png'
    };
    console.log("From image dictionary:", img['Netflix']);

    // Safety check for services
    const PAYLOAD_URL = data.payloadServer;
    let services  = data.collection?.docs ?? [];    // Services collection
    let { user } = data;    // user session


    // Derived user role, gives client if no role found
    let userRole: 'client' | 'distributor' = 
        user?.roles?.includes('distributor') ? 'distributor' : 'client';

    // Typechecks tokens as number
    let userBalance = $state(Number(user?.tokens ?? 0));

    // For loading images in server (Put in img serviceCard prop)
    // img={service.image?.url ? `${PAYLOAD_URL.replace("api", "")}${service.image.url}` : netflixImg} 

</script>


<!-- Only users allowed to see prices for now -->
{#if user}
    <div class="text-center mt-4">
        <Heading tag="h1" class="mb-4 text-4xl font-extrabold lg:text-6xl text-white!">Servicios de Streaming</Heading>
        <p class="mb-6 text-lg lg:text-xl text-gray-300!">Donde encuentras las mejores cuentas. Entrega inmediata</p>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-4 sm:px-10 md:px-20 py-10">
        {#each services as service} 
            {console.log(service.service)}
            <ServiceCard  
                userBalance={userBalance ?? 0} 
                img={getImg(img[service.service] ?? '')}
                name={service.service} 
                price={Number(service.price?.[userRole]) ?? 0}
                userId={String(user.id)}
                serviceId={String(service.id)}
                stock={Number(service.stock ?? 0)}
            />
        {/each}
    </div>
{:else}
    <WorkInProgress />
{/if}
