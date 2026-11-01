<script lang="ts">
	import { Button, Spinner } from 'flowbite-svelte';
    import { ClipboardCheckOutline, FileCopyOutline } from 'flowbite-svelte-icons';
    import { goto, invalidateAll } from '$app/navigation';
	import { onMount } from 'svelte';
    import type { PageProps } from './$types';
    import { expirationFrom, formatDate, formatDateTime } from '$lib/dates';
	
    let { data }: PageProps = $props();
    
    const order = $derived(data.order);
    
    // Purchase instant (UTC) and its expiration, computed as calendar days in
    // America/Bogota. Never add days with the browser's local setDate().
    const purchaseDate = $derived(order?.createdAt ? new Date(order.createdAt) : null);
    const expirationDate = $derived(purchaseDate ? expirationFrom(purchaseDate) : null);

    // Copy-to-clipboard feedback (cleared after 2s)
    let copied = $state(false);

    async function copyToClipboard(text: string) {
        if (!text) return;
        try {
            await navigator.clipboard.writeText(text);
            copied = true;
            setTimeout(() => (copied = false), 2000);
        } catch (err) {
            console.error('Failed to copy!', err);
        }
    }

    // Fields the clipboard button copies: service, email, password, profile, expiry.
    const copyText = $derived(
        [
            order?.service?.service ? `Servicio: ${order.service.service}` : '',
            order?.account?.email ? `Correo: ${order.account.email}` : '',
            order?.account?.password ? `Contraseña: ${order.account.password}` : '',
            order?.profileSlot ? `${order.profileSlot}` : '',
            expirationDate ? `Fecha de vencimiento: ${formatDate(expirationDate)}` : '',
        ]
            .filter(Boolean)
            .join('\n'),
    );

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
            <div class="flex items-center gap-3 mb-4">
                <h2 class="text-2xl">Información del pedido</h2>
                <button
                    type="button"
                    onclick={() => copyToClipboard(copyText)}
                    class="text-gray-400 hover:text-white transition-colors"
                    title="Copiar datos"
                    aria-label="Copiar datos"
                >
                    {#if copied}
                        <ClipboardCheckOutline class="w-4 h-4 text-green-400" />
                    {:else}
                        <FileCopyOutline class="w-4 h-4" />
                    {/if}
                </button>
            </div>
            <p><strong>ID del pedido:</strong> {order.id}</p>
            <p><strong>Servicio:</strong> {order.service?.service}</p>
            <p><strong>Correo:</strong> {order.account?.email}</p>
            <p><strong>contraseña:</strong> {order.account?.password}</p>
            <!-- <strong>Perfil:</strong>  -->
            <p>{order.profileSlot}</p>
            <p>
                <strong>Fecha de creación:</strong> {purchaseDate ? formatDateTime(purchaseDate) : '-'}
                <strong>Fecha de vencimiento:</strong> {expirationDate ? formatDate(expirationDate) : '-'}
            </p> 
        </div>
        <Button onclick={() => goto('/')} class="mt-6 bg-sky-600 hover:bg-sky-800">Volver a la tienda</Button>
    {/if}
</main>