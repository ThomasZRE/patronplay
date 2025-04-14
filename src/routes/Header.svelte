<!--TODO: Build proper Header-->


<script lang='ts'>
    let { name }: {
        name: string
    } = $props();
</script>

<h1 class="text-3x1 dark:font-bold ">This is a header</h1>

<p>Hello {name}</p>
<p>{name.replaceAll('o', 'x')}</p>

<style>
    body {
        background-color: hsl(220deg 13.73% 16.05%);
        color: #ffffff4d;
    }
</style>

<!--TODO: Add Footer component-->