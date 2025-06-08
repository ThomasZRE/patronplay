<script lang="ts">
	import Footer from '../../Footer.svelte';
	import Header from '../../Header.svelte';
	import Main from '../../Main.svelte';
    import type { PageData } from './$types';

    let { data }: { data: PageData } = $props();

    let distribuidoresPrices = {
        "Netflix": 10000,
        "Prime": 3500,
        "ChatGPT": 22000,
        "DisneyPlus": 3500,
        "DisneyPremium": 7500,
        "Max": 2800,
        // Add corresponding prices
        "Paramount": 6000,
        "Crunchyroll": 6000,
        "Vix": 5000,
        "Plex": 5000,
        "IPTV": 7000,
        "Apple": 6000,
        "Canva": 10000,
        "Youtube": 8000,
        "Spotify": 8000,
        "DGO": 16000,
    }

</script>


<Header 
    mainPage = "#"
/> 

<Main 
    title="Precios para Distribuidores"
    prices={distribuidoresPrices}
    hideCombos = {true}
/>

<Footer />

