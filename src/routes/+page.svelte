<script lang='ts'>
    import "../app.css";
	import type { PageProps } from './$types';
	import WorkInProgress from './WorkInProgress.svelte';
    import ServiceCard from "$lib/components/ServiceCard.svelte";

    // Importing static images
    import netflixImg from '$lib/static/img/netflix_img.png';
    import chatgpt_img from '$lib/static/img/chatgpt_img.png';
    import prime_img from '$lib/static/img/prime_img.png';
    import disney_premium from '$lib/static/img/disney_premium_img.png';
    import disney_estandar from '$lib/static/img/disney_estandar_img.png';
    import spotify_img from '$lib/static/img/spotify_img.png';
    import hbo_img from '$lib/static/img/hbo_img.png';

    import { Heading } from 'flowbite-svelte';

    let { data }: PageProps = $props();

    const getImg = (path: string) => {
        return new URL(path, import.meta.url).href;
    } 


    // Image dictionary
    let img: Record<string, string> = {
        'Netflix': netflixImg, //'../lib/static/img/netflix_img.png',
        'Disney Premium': disney_premium, //'../lib/static/img/disney_premium_img.png',
        'Prime Video': prime_img, //'../lib/static/img/prime_img.png',
        'ChatGPT Plus': chatgpt_img, //'../lib/static/img/chatgpt_img.png'
        'Spotify': spotify_img,
        'Disney Estandar': disney_estandar,
        'Hbo Max': hbo_img
    };
    //console.log("From image dictionary:", img['Netflix']);

    // Safety check for services
    //const PAYLOAD_URL = data.payloadServer;
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
            <ServiceCard  
                userBalance={userBalance ?? 0} 
                img={img[service.service as keyof typeof img] ?? ''}
                name={service.service} 
                price={Number(service.price?.[userRole]) ?? 0}
                userId={String(user.id)}
                serviceId={String(service.id)}
                stock={Number(service.stock ?? 0)}
            />
        {/each}
    </div>
{:else}
    <h1 class="text-center mt-4 font-extrabold lg:text-4xl">Feliz navidad y felices fiestas!🎉</h1>
    <WorkInProgress />
{/if}
