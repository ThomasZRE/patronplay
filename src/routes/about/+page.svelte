<script lang="ts">
    import '@picocss/pico';
    import Carousel from './Carousel.svelte';
    import Footer from '../Footer.svelte';
    import type { PageData } from './$types';

    let { data }: { data: PageData } = $props();

</script>

<header>
    <nav class=container>
        <ul>
            <a href="/"><img src="src\assets\img\Logo-principal-resumido-Patrón-Play-croped-PNG.png" alt="Logo PatrónPlay" width=480></a>
        </ul>
    </nav>
</header>
<br>
<br>
<main class=container>
    <div class="main-text">
        <div>    
        <h2>Sobre nosotros</h2>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque tempore numquam excepturi voluptates, est reprehenderit iusto, quam nobis, quaerat minus ipsam maiores temporibus. Ratione dolor, omnis delectus voluptate natus qui.

            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, incidunt reprehenderit quo at fugit possimus ab reiciendis. Maxime doloribus placeat sequi ducimus voluptas, doloremque aliquid explicabo quia inventore necessitatibus at!
        </p>
        </div>
        <img src="https://121clicks.com/wp-content/uploads/2024/09/best-top-travel-landscape-photography-24.jpg" alt="#" width=325>
</div>
<br>
<br>
<div class="main-text-2">
    <div>
        <h2>Sobre el servicio</h2>
        <div class="text-2">
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut, quam! Non tempora autem deserunt id nesciunt, placeat quaerat amet et minus nulla earum voluptates animi vel commodi tenetur eum voluptatum?</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem, aut! Illum velit odit tempora ea accusamus ipsam libero amet dignissimos est, quia inventore sint, harum, neque quisquam aut molestias? Sequi?</p>
        </div>
    </div>

    <div class="carousel">
        <Carousel />
    </div>

</div>

<br>

</main>

<Footer />  

<style>
    .container {
        justify-content: center;
    }

    main {
        margin-left: 100px;
        margin-right: 100px;
    }

    main .main-text {
        display: flex;
    }

    .main-text p{
        max-width:470px;
    }

    main img {
        justify-self: end;
        margin: 25px;
    }

    .main-text-2 {
        display: flex;
        flex-direction: column;
        max-width: 650px;
        margin-left: 100px;
    }

    .carousel {
        margin-left: -50px;
    }

    .main-text-2 h2 {
        text-align: center;
    }   

    .text-2 {
        margin-left: 50px;
    }

    hr {
        margin-left:-75px;
    }

</style>