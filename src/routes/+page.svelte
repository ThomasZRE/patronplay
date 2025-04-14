<script lang='ts'>
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

<Header {name}/> 

<input type="text" bind:value={name}/>

<p>The store is now {status}</p>

<button {onclick}>
    click to change the state
</button>


<Main />


<!--TODO: Integrate everything-->
<!--
    <Header />
    <Main />
    <Footer />
-->