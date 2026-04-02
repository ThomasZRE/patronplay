<script lang='ts'>
    import "../app.css";
	import type { PageProps } from './$types';
	import WorkInProgress from './WorkInProgress.svelte';
    import ServiceCard from "$lib/components/ServiceCard.svelte";

    // Importing static images
    import netflixImg from '$lib/static/img/netflix_img.jpg';
    import prime_img from '$lib/static/img/prime_img.jpg';
    import disney_premium from '$lib/static/img/disney_premium_img.jpg';
    import disney_estandar from '$lib/static/img/disney_estandar_img.jpg';
    import spotify_img from '$lib/static/img/spotify_img.png';
    import hbo_img from '$lib/static/img/hbo_img.jpg';
    import vix_img from '$lib/static/img/vix_img.jpeg';
    import paramount_img from '$lib/static/img/paramount_img.jpeg';
    import crunchyroll_img from '$lib/static/img/crunchyroll_img.jpeg';


    import { Heading } from 'flowbite-svelte';

    let { data }: PageProps = $props();


    // Image dictionary
    let img: Record<string, string> = {
        'Netflix': netflixImg, 
        'Disney Premium': disney_premium,
        'Prime Video': prime_img,  
        'Spotify': spotify_img,
        'Disney Estándar': disney_estandar,
        'Hbo Max': hbo_img,
        'Vix': vix_img,
        'Paramount': paramount_img,
        'Crunchyroll': crunchyroll_img
    };

    // Safety check for services
    let services  = data.collection?.docs ?? [];
    let { user } = data;


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
                img={img[service.service as keyof typeof img] ?? ''}
                name={service.service} 
                price={Number(service.price?.[userRole]) ?? 0}
                userId={String(user.id)}
                serviceId={String(service.id)}
                stock={Number(service.stock ?? 0)}
                description={service.description ?? ''}
            />
        {/each}
    </div>
{:else}
    <h1 class="text-center mt-4 font-extrabold lg:text-4xl">!Hola! ¿quieres darle Play ▶️ a tu entretenimiento?</h1>
    <WorkInProgress />
{/if}
