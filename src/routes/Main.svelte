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
    }

    let grid3 = 'grid-3';
    
</script>

<main class="container">
    <section id="Head-section">
        <hgroup>
            <h1>{title}</h1>
            <h3>{subtitle}</h3>
        </hgroup>
        <hgroup>
            <a href="/combos">
                <h6>Explora nuestros <div id="Combos-text" style="display: inline-flex;">combos!</div></h6>
            </a>
        </hgroup>
    </section>

    
    <section id="product-cards">
        <div class='grid grid-3'>
            <Cards showSelect product="Netflix" price={prices.Netflix} src="\src\assets\img\icons\Netflix-symbol.png" />

            <Cards showSelect product="Disney+ Estándar" price={prices.DisneyPlus} src="\src\assets\img\icons\disney-symbol.jpg"/>
            
            <Cards showSelect product="Amazon Prime Video" price={prices.Prime} src="\src\assets\img\icons\prime-symbol.png"/>
        </div>
    
        <div class='grid grid-3'>
            <Cards showSelect product="ChatGPT Plus" price={prices.ChatGPT} src="\src\assets\img\icons\ChatGPT.png"/>
            <Cards showSelect product="Disney+ Premium" price={prices.DisneyPremium} src="\src\assets\img\icons\DPremium.png" />
            <Cards showSelect product="Max" price={prices.Max} src="\src\assets\img\icons\max-symbol.jpg"/>
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

