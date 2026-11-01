<script lang='ts'>
    import "../../app.css";
	import type { PageProps } from '../$types';
	//import WorkInProgress from './WorkInProgress.svelte';
    import ServiceCard from "$lib/components/ServiceCard.svelte";

    // Importing static images
    import fbck_img from '$lib/static/img/background-popcorn.jpg';
    import netflixImg from '$lib/static/img/netflix_hw.jpeg';
    import prime_img from '$lib/static/img/primevideo_hw.jpeg';
    import disney_premium from '$lib/static/img/disney_premium_hw.jpeg';
    import disney_estandar from '$lib/static/img/disney_estandar_hw.jpeg';
    import spotify_img from '$lib/static/img/spotify_hw.jpeg';
    import hbo_img from '$lib/static/img/hbomax_hw.jpeg';
    import vix_img from '$lib/static/img/vix_hw.jpeg';
    import paramount_img from '$lib/static/img/paramount_hw.jpeg';
    import crunchyroll_img from '$lib/static/img/crunchyroll_hw.jpeg';
    import chatgpt_img from '$lib/static/img/chatgpt_hw.jpeg';
    import dgo_img from '$lib/static/img/dgo_hw.jpeg';
    import capcut_img from '$lib/static/img/capcut_hw.jpeg';
    import youtube_img from '$lib/static/img/yt_premium_hw.jpeg';
    import viki_img from '$lib/static/img/viki_hw.jpeg';
    import plex_img from '$lib/static/img/plex_hw.jpeg';
    import mubi_img from '$lib/static/img/mubi_hw.jpeg';
    import iptv_img from '$lib/static/img/iptv_hw.jpeg';
    import gemini_img from '$lib/static/img/gem_pro_hw.jpeg'
    import edye_img from '$lib/static/img/edye_hw.jpeg';
    import deezer_img from '$lib/static/img/deezer_hw.jpeg';
    import canva_img from '$lib/static/img/canva_hw.jpeg';
    import apple_img from '$lib/static/img/appletv_hw.jpeg';
    

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
        'Crunchyroll': crunchyroll_img,
        'ChatGPT Plus': chatgpt_img,
        'DIRECTV GO': dgo_img,
        'Capcut Pro': capcut_img,
        // Nuevas
        'Youtube Premium': youtube_img,
        'Viki Rakuten': viki_img,
        'Plex': plex_img,
        'Mubi': mubi_img,
        'IPTV': iptv_img,
        'Gemini Pro': gemini_img,
        'Edye': edye_img,
        'Deezer': deezer_img,
        'Canva Pro': canva_img,
        'Apple TV': apple_img
    };

    const por_chat = [
        'Canva Pro',
        'ChatGPT Plus',
        'Gemini Pro',
        'Youtube Premium',
        'Edye',
        'IPTV',
        'DIRECTV GO',
        'Deezer',
        'Plex'
     ]

    // Safety check for services
    let services  = data.collection?.docs ?? [];
    //services = services.filter(service => service?.service !== 'DIRECTV GO');

    let { user } = data;

    const FALLBACK_SERVICE_IMAGE = fbck_img;

    type ServiceImageRef = { url?: string | null } | string | null | undefined;

    /*
     `data.payloadServer` is the REST base ("http://host/api") while Media.url
     already starts with "/api/media/file/...", so only the origin is prefixed
     to avoid producing "/api/api/...".
    */
    function resolveServiceImage(service: unknown): string {
        const doc = (service ?? {}) as { service?: string; image?: ServiceImageRef };
        const image = doc.image;

        if (image && typeof image === 'object' && image.url) {
            // Absolute URLs (Payload serverURL configured) are used untouched.
            if (/^https?:\/\//.test(image.url)) return image.url;

            const origin = (data.payloadServer ?? '').replace(/\/api\/?$/, '');
            return `${origin}${image.url}`;
        }

        return /*img[doc.service ?? ''] ??*/ FALLBACK_SERVICE_IMAGE;
    }


    // Derived user role, gives client if no role found
    let userRole: 'client' | 'distributor' = 
        user?.roles?.includes('distributor') ? 'distributor' : 'client';

    // Typechecks tokens as number
    let userBalance = (Number(user?.tokens ?? 0));

    const visiting = user ? false : true;

    //$inspect(data);
    //console.log(data);

</script>


<div class="text-center mt-4">
    <Heading tag="h1" class="mb-4 text-4xl font-extrabold lg:text-6xl text-white!">Servicios de Streaming</Heading>
    <p class="mb-6 text-lg lg:text-xl text-gray-300!">Donde encuentras las mejores cuentas. Entrega inmediata</p>
</div>

<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-4 sm:px-10 md:px-20 py-10">
    {#each services as service} 
        <ServiceCard  
            userBalance={userBalance ?? NaN} 
            img={resolveServiceImage(service)}
            name={service.service} 
            price={Number(service.price?.[userRole]) ?? 0}
            userId={String(user?.id || null)}
            serviceId={String(service.id)}
            stock={Number(service.stock ?? 0)}
            description={service.description ?? ''}
            visiting={visiting}
            por_chat={por_chat.includes(service.service)}
        />
    {/each}
</div>
