<script lang="ts">
    import type { PageProps } from './$types';
    import "../../app.css";

    import { Button, Input, Label } from 'flowbite-svelte';

    let { data }: PageProps = $props();
</script>

<main class="flex justify-center">
    <form class="max-w-3xl bg-neutral-950 p-10 m-10 rounded-2xl">
        <div class="mb-3">
            <Label for="username" class="mb-2 hover:border-sky-800!">Nombre de usuario</Label>
            <Input type="text" id="first_name" placeholder="Daniel" required/>
        </div>
        <div class="mb-3">
            <Label for="password" class="mb-2">Contraseña</Label>
            <Input type="password" placeholder="******" required/>
        </div>
        <div class="mb-6">
            <Label for="confirm_password" class="mb-2">Confirmar contraseña</Label>
            <Input type="password" placeholder="******" required />
        </div>
        <Button type="submit" class="bg-sky-600 hover:bg-sky-800">Crear cuenta</Button>
    </form>
</main>