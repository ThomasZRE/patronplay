<script lang="ts">
	import { Badge, Button, Heading, P, Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell } from "flowbite-svelte";
	import type { PageProps } from "../$types";
	import { ClipboardCheckOutline, FileCopyOutline } from "flowbite-svelte-icons";
	import { fade } from "svelte/transition";

    interface Order {
        id: string;
        createdAt: string;
        service?: {
            service: string;
        };
        account?: {
            email: string;
            password?: string;
        };
        profileSlot?: string;
        status: 'pending' | 'completed' | 'failed';
    }

    interface PaginationData {
        page: number;
        totalPages: number;
        hasNextPage: boolean;
        hasPrevPage: boolean;
    }
    
    // Ensures type safety for data props
    let { data }: PageProps & { data: { orders: Order[], pagination: PaginationData } } = $props();

    const orders = $derived(data.orders);
    const pagination = $derived(data.pagination);

    function formatDate(dateString: string) {
        return new Date(dateString).toLocaleDateString("es-CO", {
            day: '2-digit',
            month: 'short',
            year: 'numeric'
        });
    }

    let copiedId = $state("");
    async function copyToClipboard(text: string, id: string) {
        try {
            await navigator.clipboard.writeText(text);
            copiedId = id;
            setTimeout(() => (copiedId = ""), 2000); // Clear after 2 seconds
        } catch (err) {
            console.error("Failed to copy!", err);
        }
    }
</script>

<div class="container mx-auto p-4 sm:p-10">
    <div class="mb-8">
        <Heading tag="h2" class="text-white mb-2">Mis pedidos</Heading>
        <P class="text-gray-400">Aquí encuentras los detalles de tus compras.</P>
    </div>

    {#if orders && orders.length === 0} 
        <div class="text-center p-20 border-2 border-dashed border-zinc-800 rounded-xl">
            <P class="text-gray-400">Aún no has realizado ninguna compra.</P>
        </div>
    {:else if orders}
        <Table hoverable={true} class="bg-stone-900! border border-zinc-800">
            <TableHead class="bg-stone-800! text-gray-300">
                <TableHeadCell>Fecha</TableHeadCell>
                <TableHeadCell>Servicio</TableHeadCell>
                <TableHeadCell>Credenciales</TableHeadCell>
                <TableHeadCell>Perfil</TableHeadCell>
                <TableHeadCell>Estado</TableHeadCell>
            </TableHead>
            <TableBody>
                {#each orders as order}  
                    <TableBodyRow class="border-b border-zinc-800">
                        <TableBodyCell class="text-gray-400">
                            {formatDate(order.createdAt)}
                        </TableBodyCell>
                        <TableBodyCell class="font-bold text-black">
                            {order.service?.service || 'Servicio Desconocido'}
                        </TableBodyCell>
                        <TableBodyCell class="text-sm">
                            <div class="flex flex-col gap-2">
                                {#if order.account?.email}
                                    <div class="flex items-center group">
                                        <span class="text-sky-400 font-mono mr-2">{order.account?.email || 'N/A'}</span>
                                        <button
                                            onclick={() => copyToClipboard(order.account?.email || '', order.id + 'email')}
                                            class="text-gray-500 hover:text-white transition-colors"
                                            title="Copiar correo"
                                            >
                                                {#if copiedId === order.id + 'email'}
                                                    <span transition:fade={{ duration: 200 }}>
                                                        <ClipboardCheckOutline class="w-4 h-4 text-green-400" />
                                                    </span>
                                                {:else}
                                                    <FileCopyOutline class="w-4 h-4" />
                                                {/if}
                                        </button>
                                    </div>
                                {/if}
                                
                                {#if order.account?.password}
                                    <div class="flex items-center group">
                                        <span class="text-zinc-500 font-mono text-xs">{order.account?.password || '**********'}</span>
                                        <button
                                            onclick={() => copyToClipboard(order.account?.password || '', order.id + 'pass')}
                                            class="text-gray-500 hover:text-white transition-colors"
                                            title="Copiar Contraseña"
                                            >
                                                {#if copiedId === order.id + 'pass'}
                                                    <span transition:fade={{ duration: 200 }}>
                                                        <ClipboardCheckOutline class="w-4 h-4 text-green-400" />
                                                    </span>
                                                {:else}
                                                    <FileCopyOutline class="w-4 h-4" />
                                                {/if}
                                        </button>
                                    </div>
                                {/if}
                            </div>
                        </TableBodyCell>
                        <TableBodyCell class="text-green-400 font-bold">
                            {order.profileSlot || 'N/A'}
                        </TableBodyCell>
                        <TableBodyCell>
                            {#if order.status === 'completed'}
                                <Badge color="green">Completado</Badge>
                            {:else if order.status === 'pending'}
                                <Badge color="yellow">Pendiente</Badge>
                            {:else}
                                <Badge color="red">Fallido</Badge>
                            {/if}
                        </TableBodyCell>
                    </TableBodyRow>
                {/each}
            </TableBody>
        </Table>
        <div class="flex justify-center items-center gap-4 mt-8">
            <Button
                disabled={!pagination.hasPrevPage}
                href="?page={pagination.page - 1}"
                color="alternative"
                size="sm"
            >
                Anterior
            </Button>
            
            <span class="text-gray-400">
                Página <strong>{pagination.page}</strong> de {pagination.totalPages}
            </span>

            <Button
                disabled={!pagination.hasNextPage}
                href="?page={pagination.page + 1}"
                color="alternative"
                size="sm"
            >
                Siguiente
            </Button>
        </div>
    {/if}
</div>