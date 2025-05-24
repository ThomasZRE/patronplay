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
    }
</script>


<Header /> 

<Main 
    title="Precios para Distribuidores"
    prices={distribuidoresPrices}
/>

<Footer />

