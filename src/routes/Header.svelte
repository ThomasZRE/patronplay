<!--TODO: Build proper Header-->
<script lang='ts'>
    import '@picocss/pico/css/pico.colors.min.css'

    //"src\assets\img\Logo-positivo-resumido-Patrón-Play---SVG.png"
</script>

<!--

    TODO: add about page, our clients, comments, contacts

-->

<nav class="container">
    <ul>
        <li><img src="src\assets\img\Logo-principal-resumido-Patrón-Play-croped-PNG.png" alt="PatronPlay" width=180>
        </li>
    </ul>
    <ul>
        <li><a href="/about">Sobre nosotros</a></li>
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
