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

    
    <section id="product-cards">
        <div class='grid'>
            <Cards product="Netflix" price={11500} src={"https://about.netflix.com/images/meta/netflix-symbol-black.png"} />

            <Cards product="Disney+ Estándar" price={6500} src={"https://specials-images.forbesimg.com/imageserve/5dc983162c886a0007ebd99b/960x0.jpg?fit=scale"}/>
            
            <Cards product="Amazon Prime Video" price={6000} src={"https://1000logos.net/wp-content/uploads/2023/02/amazon-prime-video-logo.png"}/>
        </div>
    
        <div class='grid'>
            <Cards product="ChatGPT" price={26000} src={"https://logos-world.net/wp-content/uploads/2023/02/ChatGPT-Logo.jpg"}/>
            <Cards product="Disney+ Premium" price={9500} src={"https://pbs.twimg.com/media/FZ02LLIWAAYY-t_.jpg:large"} />
            <Cards product="Max" price={4000} src={"https://imagenes.20minutos.es/uploads/imagenes/2023/04/19/max-la-nueva-plataforma-que-sustituye-a-hbo-max.jpeg"}/>
        </div>     
    </section>
    
</main>
