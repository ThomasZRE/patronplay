<script lang=ts>
    //import '../styles/app.css';
    import '@picocss/pico/css/pico.css'
    import Cards from '../components/Cards.svelte'

    export let title = "Servicios de Streaming";
    export let subtitle = "Donde encuentras las mejores cuentas"
    export let prices = {
        "Netflix": 11500,
        "Prime": 6000,
        "ChatGPT": 26000,
        "DisneyPlus": 6500,
        "DisneyPremium": 9500,
        "Max": 4000,
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

    export let hideCombos = false;
    
</script>

<main class="container">
    <section id="Head-section">
        <hgroup>
            <h1>{title}</h1>
            <h3>{subtitle}</h3>
        </hgroup>
        <hgroup>
            <a href="/combos" hidden={hideCombos}>
                <h6>Explora nuestros <div id="Combos-text" style="display: inline-flex;">combos!</div></h6>
            </a>
        </hgroup>
    </section>

    
    <section id="product-cards">
        <div class='grid grid-4'>
            <Cards showSelect product="Netflix" price={prices.Netflix} src="\src\assets\img\icons\Netflix-symbol.png" />

            <Cards showSelect product="Disney+ Estándar" price={prices.DisneyPlus} src="\src\assets\img\icons\disney-symbol.jpg"/>
            
            <Cards showSelect product="Amazon Prime Video" price={prices.Prime} src="\src\assets\img\icons\prime-symbol.png"/>

            <Cards showSelect product="Paramount+" price={prices.Paramount} src="\src\assets\img\icons\prime-symbol.png"/>
        </div>
    
        <div class='grid grid-4'>
            <Cards showSelect product="ChatGPT Plus" price={prices.ChatGPT} src="\src\assets\img\icons\ChatGPT.png"/>
            <Cards showSelect product="Disney+ Premium" price={prices.DisneyPremium} src="\src\assets\img\icons\DPremium.png" />
            <Cards showSelect product="Max" price={prices.Max} src="\src\assets\img\icons\max-symbol.jpg"/>
            <Cards showSelect product="Crunchyroll" price={prices.Crunchyroll} src="\src\assets\img\icons\prime-symbol.png"/>

        </div>
        
        <div class='grid grid-4'>
            <Cards showSelect product="Vix" price={prices.Vix} src="\src\assets\img\icons\prime-symbol.png"/>
            <Cards showSelect product="Plex" price={prices.Plex} src="\src\assets\img\icons\prime-symbol.png"/>
            <Cards showSelect product="IPTV Smarters" price={prices.IPTV} src="\src\assets\img\icons\prime-symbol.png"/>
            <Cards showSelect product="Apple TV" price={prices.Apple} src="\src\assets\img\icons\prime-symbol.png"/>
        </div>

        <div class="grid grid-4">
            <Cards showSelect product="Canva Pro" price={prices.Canva} src="\src\assets\img\icons\prime-symbol.png"/>
            <Cards showSelect product="Youtube Premium" price={prices.Youtube} src="\src\assets\img\icons\prime-symbol.png"/>
            <Cards showSelect product="Spotify" price={prices.Spotify} src="\src\assets\img\icons\prime-symbol.png"/>
            <Cards showSelect product="DGO con Win+" price={prices.DGO} src="\src\assets\img\icons\prime-symbol.png"/>
        </div>
    </section>

</main>
<br>

<style>
    #Head-section {
        display:flex;
        justify-content: space-between;
    }

    #Head-section h6 {
        color: var(--pico-small-color);
    }

    #Head-section a {
        text-decoration: none;
        color: var(--pico-small-color);
    }

    #Head-section h6:hover {
        color: var(--pico-h6-color);
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

