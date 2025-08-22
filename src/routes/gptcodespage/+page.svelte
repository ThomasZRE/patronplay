<svelte:head>
    <title>ChatGPT Codes Page</title>
</svelte:head>

<script lang="ts">
    //import type { PageProps } from './$types';
    import "./codes.css";
    import CodeGpt from '../../components/CodeGPT.svelte';
    import { getLatest } from './codes';

    //let { data }: PageProps = $props();

    let email = $state('');
    //let codes: any[] = [];
    let loading = $state();

    //$inspect(email).with(console.trace);


    async function hookEmails(event: any) {
        event.preventDefault()
        const result = await getLatest();
        
        // Filters by receiver and reduces the result
        return result.filter((code: any) => code.to === email).slice(0,1)
    }

    // hookEmails(event)

</script>
<div class="body">

    <div class="container ">
        <h1>Códigos de ChatGPT</h1>
        <form onsubmit={(event) => loading = hookEmails(event)} class="email-form">
            <input bind:value={email} type="email" class="email-input" placeholder="Ingresa tu correo aqui"/>
            <button type="submit" class="submit-button">Enviar</button>
        </form>
    </div>

    {#await loading}
        <div class="flex justify-center items-center mt-8">
            <div class="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
        </div>
    {:then codes: any}
        {#each codes as code} 
            <CodeGpt {...code} />
        {/each}
    {:catch}
        <p>Ha ocurrido un error, por favor, inténtalo nuevamente</p>
    {/await}

</div>


<style>

    .body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
        background-color: #ebebeb; /* Light gray background */
        color: #1c1e21;

        /* This is the key for centering the content */
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
    }

    /* The card that holds the content */
    .container {
        background-color: #ffffff;
        padding: 40px 30px;
        border-radius: 12px; /* Rounded corners */
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
        text-align: center;
        max-width: 400px;
        margin-top: 2.5rem;
        margin-bottom: 2.5rem;
        width: 90%;
    }

    /* Title styling */
    h1 {
        font-size: 2rem;
        margin-top: 0;
        margin-bottom: 24px;
        color: #111;
    }
        
    /* The form itself */
    .email-form {
        display: flex;
        flex-direction: column; /* Stack input and button vertically */
        gap: 15px; /* Space between the input and the button */
    }

    /* Email input field styling */
    .email-input {
        background-color: #ffffff;
        padding: 14px 16px;
        border: 1px solid #ddd;
        border-radius: 8px;
        font-size: 1rem;
        width: 100%;
        box-sizing: border-box; /* Important for padding and width */
        transition: border-color 0.2s ease, box-shadow 0.2s ease;
    }

    /* Style for when the user clicks on the input field */
    .email-input:focus {
        outline: none;
        border-color: #000811; /* Blue highlight */
        box-shadow: 0 0 0 3px rgba(7, 20, 34, 0.103);
    }

    /* Submit button styling */
    .submit-button {
        padding: 14px 16px;
        border: none;
        border-radius: 8px;
        background-color: #111; /* Primary blue color */
        color: white;
        font-size: 1rem;
        font-weight: bold;
        cursor: pointer;
        transition: background-color 0.2s ease;
    }

    /* Darker blue when hovering over the button */
    .submit-button:hover {
        background-color: #000000;
    }

    /* --- Fix for Browser Autofill --- */
    .email-input:-webkit-autofill,
    .email-input:-webkit-autofill:hover, 
    .email-input:-webkit-autofill:focus, 
    .email-input:-webkit-autofill:active {
        /* This forces the text color to be black */
        transition: background-color 5000s ease-in-out 0s;
        
        /* This trick uses a large inner shadow to override the background color */
        -webkit-text-fill-color: #111 !important;
    }
</style>
