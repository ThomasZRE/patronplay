<script lang="ts">
    import { Card, Button } from 'flowbite-svelte'; 
    import { ArrowRightOutline } from 'flowbite-svelte-icons';

    let { img, name, price } = $props();
</script>

<div class="space-y-4">
        <Card img={img} class="max-w-[200px] p-0 bg-stone-950 border-zinc-900">
            <div class="m-4">
                <h5 class="mb-2 text-2xl font-bold tracking-tight dark:text-white">{name}</h5>
                <p class="mb-3 leading-tight font-normal dark:text-gray-400">${price}</p>
                <Button class="w-40 bg-green-600">
                    Compra ahora <ArrowRightOutline class="ms-2 h-6 w-6 text-white"/>
                </Button>
            </div>
        </Card>
</div>