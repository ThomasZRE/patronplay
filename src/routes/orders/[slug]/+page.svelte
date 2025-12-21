<script lang="ts">
	import { Button, Spinner } from 'flowbite-svelte';
    import { goto, invalidateAll } from '$app/navigation';
	import { onMount } from 'svelte';
    import type { PageProps } from './$types';
	
    let { data }: PageProps = $props();
    
    const order = $derived(data.order);
    
        // Function that adds x days to a date
    function addDays(date: Date, days: number): Date {
        let result = new Date(date);
        result.setDate(result.getDate() + days);
        return result;
    }

    function formatDate(date: Date): string {
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    }

    onMount(() => {
        const interval = setInterval(() => {
            if (order.status === 'pending') {
                invalidateAll();
            } else {
                clearInterval(interval);
            }
        }, 2000);

        return () => clearInterval(interval);
    });

    
</script>

<main class="text-amber-50 p-10">
    {#if order.status === 'pending'}
        <div class="flex flex-col items-center justify-center space-y-4">
            <Spinner size="12" color="yellow" />
            <h1 class="text-2xl">Procesando tu pedido...</h1>    
            <p>Estamos preparando tu cuenta de {order.service?.service}. Esto puede tardar unos segundos.</p>
        </div>

    {:else if order.status === 'failed'}
        <div class="bg-red-900/50 p-6 rounded-lg border border-red-500">
            <h1 class="text-2xl mb-4 text-red-200">Algo salió mal</h1>
            <p>No pudimos completar tu compra. Por favor, contacta a soporte.</p>
            <Button onclick={() => goto('/')} class="mt-6 bg-red-600">Volver a la tiennda</Button>
        </div>
    {:else}
        <h1 class="text-3xl mb-6">¡Gracias por tu compra!</h1>
        <div class="bg-stone-900 p-6 rounded-lg shadow-md">
            <h2 class="text-2xl mb-4">Información del pedido</h2>
            <p><strong>ID del pedido:</strong> {order.id}</p>
            <p><strong>Servicio:</strong> {order.service?.service}</p>
            <p><strong>Correo:</strong> {order.account?.email}</p>
            <p><strong>contraseña:</strong> {order.account?.password}</p>
            <p><strong>Perfil:</strong> {order.profileSlot}</p>
            <p><strong>Fecha de creación:</strong> {new Date(order.createdAt).toLocaleDateString("es-CO")} <strong>Fecha de vencimiento:</strong> {formatDate(addDays(new Date(order.createdAt), 30))}</p> 
        </div>
        <Button onclick={() => goto('/')} class="mt-6 bg-sky-600 hover:bg-sky-800">Volver a la tienda</Button>
    {/if}
</main>