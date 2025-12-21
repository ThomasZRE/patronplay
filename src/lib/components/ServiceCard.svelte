<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import { Card, Button, Modal } from 'flowbite-svelte'; 
    import { ArrowRightOutline } from 'flowbite-svelte-icons';

    interface Props {
        img: string;
        name: string;
        price: number;
        userBalance: number;
        userId: string;
        serviceId: string;
        stock: number;
    }

    // Props
    let { img, name, price, userBalance, userId, serviceId, stock }: Props = $props();

    let defaultModal = $state(false);
    let isSubmitting = $state(false);

    let isSoldOut = $derived(stock <= 0);
    //console.log("Value of issoldout:", isSoldOut);
    let isLocked = $derived(isSoldOut ||userBalance < price || isSubmitting);

    const formatCurrency = (val: number) => val.toLocaleString('es-CO');

    function openModal() {
        console.log("openModal called......");
        defaultModal = true;
    }

    function closeModal() {
        console.log("closeModal called......")
        defaultModal = false;
    }

    const submitHandler: SubmitFunction = () => {
        isSubmitting = true;

        return async ({ update }) => {
            await update()
            isSubmitting = false;
            closeModal();
        };
    };

</script>

<div class="space-y-4">
        <Card img={img} class="max-w-[200px] p-0 bg-stone-950 border-zinc-900">
            <div class="m-4">
                <h5 class="mb-2 text-2xl font-bold tracking-tight dark:text-white">{name}</h5>
                <p class="mb-3 leading-tight font-normal dark:text-gray-400">
                    {#if isSoldOut}
                        <span class="text-red-500 font-extrabold uppercase text-sm">Agotado</span>
                    {:else}
                        ${formatCurrency(price)}
                    {/if}
                </p>
                
                <Button 
                    onclick={isSoldOut ? null : openModal} 
                    disabled={isLocked}
                    class="w-40 {isSoldOut ? 'bg-gray-800': 'bg-green-600'}"
                >
                    {#if isSoldOut}
                        Agotado
                    {:else}
                        Compra ahora <ArrowRightOutline class="ms-2 h-6 w-6 text-white"/>
                    {/if}
                </Button>
            </div>
        </Card>
        {#if !isSoldOut}
        <Modal 
            bind:open={defaultModal} 
            size="xs" 
            class="bg-gray-900 text-amber-50"    
        >
            <form 
                method="POST" 
                action="/" 
                use:enhance={submitHandler}
                class="flex flex-col space-y-6 items-center justify-center "
            >
                <input hidden name="userId" type="text" value={userId}/>
                <input hidden name="serviceId" type="text" value={serviceId}/>
                
                <h3 class="self-start m-0 p-0 w-full font-bold">Tu pedido</h3>
                <span class="border-b border-gray-600 w-full"></span>
                
                <div class="flex items-center w-full">
                    <img src={img} width="60" alt="product_img" class="mr-4">
                    <span><strong>{name}</strong></span>
                </div>


                <div class="flex justify-between w-full mt-4">
                    <span>Total</span>
                    <span><strong>${formatCurrency(price)}</strong></span>
                </div>

                <div class="flex justify-between w-full">
                    <span>Tu saldo</span>
                    <span class={userBalance < price ? "text-red-500" : "text-green-500"}>
                        <strong>${formatCurrency(userBalance)}</strong>
                    </span>
                </div>
                <span class="border-b border-gray-600 w-full mb-4"></span>
             
                <Button type="submit" disabled={isLocked} class="w-full">
                    {#if isSubmitting}
                        Procesando...
                    {:else}
                        Confirmar compra
                    {/if}
                </Button>
                
                <Button type="button" onclick={closeModal} class="bg-red-600 w-full">Cancelar</Button>  
            </form>
        </Modal>
        {/if}
</div>