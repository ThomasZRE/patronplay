<script lang=ts>
    //import '../styles/app.css';
    import '@picocss/pico/css/pico.css';
    import Cards from '../components/Cards.svelte';

    let title = "Servicios de Streaming";
    let subtitle = "Donde encuentras las mejores cuentas";
    export let prices = {
        "Netflix": 11500,   // none
        "Prime": 6500,      // Agotado
        "ChatGPT": 26000,   // none
        "DisneyPlus": 6000, // none
        "DisneyPremium": 9500, // none
        "Max": 6000,        // 7000
        "Paramount": 6000,  // none
        "Crunchyroll": 5000, // 6000
        "Vix": 5000,        // none
        "Plex": 5000,       // none
        "IPTV": 7000,       // none
        "Apple": 6000,      // none
        "Canva": 5000,      // 9000
        "Youtube": 8000,    // none
        "Spotify": 8000,    // none
        "DGO": 18000,       // Agotado
        "mubi": 6000,       // none
        "rakuten": 6000,    // none
        "gemini": 10000,    // 15000
    }
    let tag = 0;

    export let hideCombos = false;
    export let tags = {} // Add this line to accept tags prop
    
</script>

<main class="container">
    <section id="Head-section">
        <hgroup>
            <a href="/combos" hidden={hideCombos}>
                <h4>Explora nuestros <div id="Combos-text" style="display: inline-flex;">combos!</div></h4>
            </a>
        </hgroup>
    </section>

    
    <section id="product-cards">
        <div class='grid grid-4'>
            <Cards showSelect product="Netflix" price={prices.Netflix} tag={tags?.Netflix || tag} src="/src/lib/assets/img/icons/Netflix-symbol.webp" />

            <Cards showSelect product="Disney+ Estándar" price={prices.DisneyPlus} tag={tags?.DisneyPlus || tag} src="/src/lib/assets/img/icons/disney-symbol.webp"/>
            
            <Cards showSelect product="Prime Video" price={prices.Prime} tag={tags?.Prime || tag} src="/src/lib/assets/img/icons/prime-symbol.webp"/>

            <Cards showSelect product="Paramount+" price={prices.Paramount} tag={tags?.Paramount || tag} src="/src/lib/assets/img/icons/paramount-symbol.webp"/>
        </div>
    
        <div class='grid grid-4'>
            <Cards showSelect product="ChatGPT Plus" price={prices.ChatGPT} tag={tags?.ChatGPT || tag} src="/src/lib/assets/img/icons/ChatGPT.webp"/>
            <Cards showSelect product="Disney+ Premium" price={prices.DisneyPremium} tag={tags?.DisneyPremium || tag} src="/src/lib/assets/img/icons/DPremium.webp" />
            <Cards showSelect product="Max" price={prices.Max} tag={tags?.Max || prices.Max + 1000} src="/src/lib/assets/img/icons/max-symbol.webp"/>
            <Cards showSelect product="Crunchyroll" price={prices.Crunchyroll} tag={tags?.Crunchyroll || prices.Crunchyroll+1000} src="/src/lib/assets/img/icons/crunchyroll-symbol.webp"/>

        </div>
        
        <div class='grid grid-4'>
            <Cards showSelect product="Vix" price={prices.Vix} tag={tags?.Vix || tag} src="/src/lib/assets/img/icons/vix-symbol.webp"/>
            <Cards showSelect product="Plex" price={prices.Plex} tag={tags?.Plex || tag} src="/src/lib/assets/img/icons/plex-symbol.webp"/>
            <Cards showSelect product="IPTV Smarters" price={prices.IPTV} tag={tags?.IPTV || tag} src="/src/lib/assets/img/icons/iptv-symbol.webp"/>
            <Cards showSelect product="Apple TV" price={prices.Apple} tag={tags?.Apple || tag} src="/src/lib/assets/img/icons/apple-symbol.webp"/>
        </div>

        <div class="grid grid-4">
            <Cards showSelect product="Canva Pro" price={prices.Canva} tag={tags?.Canva || prices.Canva+4000} src="/src/lib/assets/img/icons/canva-symbol.webp"/>
            <Cards showSelect product="Youtube Premium" price={prices.Youtube} tag={tags?.Youtube || tag} src="/src/lib/assets/img/icons/youtube-symbol.webp"/>
            <Cards showSelect product="Spotify" price={prices.Spotify} tag={tags?.Spotify || tag} src="/src/lib/assets/img/icons/spotify-symbol.webp"/>
            <Cards showSelect product="DGO con Win+" price={prices.DGO} tag={tags?.DGO || tag} src="/src/lib/assets/img/icons/dgo-symbol.webp"/>
        </div>

        <div class="grid grid-4">
            <Cards showSelect product="Mubi" price={prices.mubi} tag={tags?.mubi || tag} src="/src/lib/assets/img/icons/mubi-symbol.webp"/>
            <Cards showSelect product="Rakuten VIKI" price={prices.rakuten} tag={tags?.rakuten || tag} src="/src/lib/assets/img/icons/rakuten-symbol.webp"/>
            <Cards showSelect product="Gemini Advanced" price={prices.gemini} tag={15000} src="/src/lib/assets/img/icons/gemini-symbol.webp"/>
            <div></div>
        </div>
    </section>

</main>
<br>

<style>
    #Head-section {
        display:flex;
        justify-content: space-between;
    }

    #Head-section a {
        text-decoration: none;
        color: var(--pico-small-color);
    }

    #Combos-text {
        animation: color-change 1s infinite;
    }

    @keyframes color-change {
        0% { color: var(--pico-color-red-400); }
        50% { color: var(--pico-color-indigo-700); }
        100% { color: var(--pico-color-red-400); }    
    }
    
</style>

