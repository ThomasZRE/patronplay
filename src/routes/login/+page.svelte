<script lang="ts">
    import type { PageProps } from './$types';
    import "../../app.css";

    import { Button, Input, Label } from 'flowbite-svelte';

    let { data }: PageProps = $props();
</script>

<main class="flex justify-center">
    <form method="POST" class="max-w-3xl bg-neutral-950 p-8 m-10 rounded-2xl">
        <div class="mb-3">
            <Label for="username" class="mb-2 hover:border-sky-800!">Nombre de usuario</Label>
            <Input name="username" type="text" id="first_name" placeholder="Usuario" required/>
        </div>
        <div class="mb-6">
            <Label for="password" class="mb-2">Contraseña</Label>
            <Input name="password" type="password" placeholder="******" required/>
        </div>
        <Button type="submit" class="bg-sky-600 hover:bg-sky-800">Iniciar sesión</Button>
    </form>
</main>