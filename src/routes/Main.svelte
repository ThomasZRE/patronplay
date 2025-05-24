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
    
</script>

<main class="container">

    <section id="Head-section">
        <hgroup>
            <h1>{title}</h1>
            <h3>{subtitle}</h3>
        </hgroup>
    </section>

    
    <section id="product-cards">
        <div class='grid'>
            <Cards product="Netflix" price={prices.Netflix} src="\src\assets\img\icons\Netflix-symbol.png" />

            <Cards product="Disney+ Estándar" price={prices.DisneyPlus} src="\src\assets\img\icons\disney-symbol.jpg"/>
            
            <Cards product="Amazon Prime Video" price={prices.Prime} src="\src\assets\img\icons\prime-symbol.png"/>
        </div>
    
        <div class='grid'>
            <Cards product="ChatGPT Plus" price={prices.ChatGPT} src="\src\assets\img\icons\ChatGPT.png"/>
            <Cards product="Disney+ Premium" price={prices.DisneyPremium} src="\src\assets\img\icons\DPremium.png" />
            <Cards product="Max" price={prices.Max} src="\src\assets\img\icons\max-symbol.jpg"/>
        </div>     
    </section>

</main>
<br>

