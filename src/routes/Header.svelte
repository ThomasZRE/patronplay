<!--TODO: Build proper Header-->
<script lang='ts'>
    import '@picocss/pico/css/pico.colors.min.css'
	import type { PageProps } from './$types';

    let props = $props();

    let mainPage = $state("/");
    
    let title = $state("Servicios de Streaming");
    let subtitle = $state("Donde encuentras las mejores cuentas")
    let hideIcon = $state(true);

    //"src\assets\img\Logo-positivo-resumido-Patrón-Play---SVG.png"
</script>

<!--

    TODO: add about page, our clients, comments, contacts

-->

<nav class="container">
    <ul>
        <li><hgroup>
            <h1>{title}</h1>
            <h3>{subtitle}</h3>
        </hgroup>
        <li hidden={hideIcon}><a href={mainPage}><img src="#" alt="PatronPlay" width=180>
        </a></li>
    </ul>
    <ul>
        <li><a href="/codespage">Página de códigos</a></li>
        {#if !props.progress}
            <li><a href="/about">Sobre nosotros</a></li>
            <li><a href="/terms-and-conditions">Términos y condiciones</a></li>
        {/if}
    </ul>    
</nav>
<br>
<br>    

<style>
    .container {
        border-color: var(--pico-grey-900);
        border-bottom: var(--pico-border-width) solid var(--pico-muted-border-color);
    }

    .container img {
        margin:auto;
    }

    li a {
        color: var(--pico-h3-color);
        text-decoration: none;    
    }

    li a:hover {
        color: var(--pico-h4-color);
    }
</style>
