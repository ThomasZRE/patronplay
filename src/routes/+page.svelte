<script lang='ts'>
    // TODO: Learn some Typescript
    import Header from './Header.svelte'; 
    import Main from './Main.svelte';
    
    let name = $state("Orlando");
    let status: 'OPEN' | 'CLOSED' = $state('OPEN');

    //let fullname = $

    //function toggle() {
    //    status = status === "OPEN" ? "CLOSED" : "OPEN";
    //}

    function onclick() {
        status = status === "OPEN" ? "CLOSED" : "OPEN";
    }
</script>

<Header /> 

<Main />



<!--TODO: Integrate everything-->
<!--
    <Header />
    <Main />
    <Footer />
-->