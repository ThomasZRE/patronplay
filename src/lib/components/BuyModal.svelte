<script lang="ts">
    import { Modal, P } from "flowbite-svelte";
    let { display } = $props();
</script>

<Modal bind:open={display} fullscreen size="none" class="bg-gray-100">
  <div class="flex h-screen items-center justify-center">
    <P class="text-3xl">Content</P>
  </div>
</Modal>