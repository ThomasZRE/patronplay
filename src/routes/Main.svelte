<script>
    //import '../styles/app.css';
    import '@picocss/pico/css/pico.css'
    import Cards from './Cards.svelte'
    
</script>

<main class="container">
<!--TODO: Fix repetition in instructions-->
    

    <section id="Head-section">
        <hgroup>
            <h1>Servicios de Streaming</h1>
            <h3>Donde encuentras las mejores cuentas</h3>
        </hgroup>
    </section>

    <!-- src\assets\img\icons\Netflix-logo.png -->
    
    <section id="product-cards">
        <div class='grid'>
            <Cards product="Netflix" price={11500} src="src\assets\img\icons\netflix-symbol-black.png" />

            <Cards product="Disney+ Estándar" price={6500} src="src\assets\img\icons\Disneyplus-logo.jpg"/>
            
            <Cards product="Amazon Prime Video" price={6000} src="src\assets\img\icons\amazon-prime-video-logo (2).png"/>
        </div>
    
        <div class='grid'>
            <Cards product="ChatGPT" price={26000} src="src\assets\img\icons\GPT-logo.png"/>
            <Cards product="Disney+ Premium" price={9500} src="src\assets\img\icons\DisneyPremium.png" />
            <Cards product="Max" price={4000} src="src\assets\img\icons\max-logo.jpeg"/>
        </div>     
    </section>

</main>
<br>

