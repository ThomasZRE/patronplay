<script>
    let { children } = $props();
</script>

<!--

<script lang='ts'>
    // TODO: Learn some Typescript
    import Header from './Header.svelte'; 
    import Main from './Main.svelte';
    import Footer from './Footer.svelte';

</script>

<Header /> 

<Main />

<Footer />

-->

{@render children()}