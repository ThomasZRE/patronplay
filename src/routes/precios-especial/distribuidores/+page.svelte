<script lang="ts">
	import Footer from '../../Footer.svelte';
	import Header from '../../Header.svelte';
	import Main from '../../Main.svelte';
    import type { PageData } from './$types';

    let { data }: { data: PageData } = $props();

    let distribuidoresPrices = {
        "Netflix": { price: 9500, tag: 10000 },
        "Prime": { price: 4500, tag: 0},
        "ChatGPT": { price: 22000, tag: 0 },
        "DisneyPlus": { price: 3000, tag: 0 },
        "DisneyPremium": { price: 7500, tag: 9000 },
        "Max": { price: 2800, tag: 4700 },
        "Paramount": { price: 3500, tag: 0 },
        "Crunchyroll": { price: 2500, tag: 3500 },
        "Vix": { price: 2500, tag: 0 },
        "Plex": { price: 3000, tag: 0 },
        "IPTV": { price: 5500, tag: 0 },
        "Apple": { price: 4500, tag: 0 },
        "Canva": { price: 4000, tag: 7500 },
        "Youtube": { price: 7000, tag: 0 },
        "Spotify": { price: 7500, tag: 0 },
        "DGO": { price: 16000, tag: 0 },
        "mubi": { price: 4000, tag: 0 },
        "rakuten": { price: 3500, tag: 0 },
        "gemini": { price: 8000, tag: 10000 },
    }

    // Transform the prices object to match Main component's expected format
    let prices = Object.fromEntries(
        Object.entries(distribuidoresPrices).map(([key, value]) => [key, value.price])
    );

    let tags = Object.fromEntries(
        Object.entries(distribuidoresPrices).map(([key, value]) => [key, value.tag])
    );
</script>


<Header 
    mainPage = "#"
    title = "Precios para Distribuidores"
/> 

<Main 
    prices={prices}
    tags={tags}
    hideCombos={true}
/>

<Footer />

