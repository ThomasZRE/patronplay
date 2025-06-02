<script lang="ts">
	import Cards from '../../components/Cards.svelte';
	import Header from '../Header.svelte';
    import type { PageData } from './$types';

    let { data }: { data: PageData } = $props();

    let prices = {
        'Duos':{
            'DUO_DE_PROMO': [11500, "Max, Prime video"],
            'DUO_DINAMICO': [15000, "Paramount+, Netflix"],
            'DUO_NUEVO': [9000,"Crunnchyroll, Paramount+"],
            'DUO_DE_SIEMPRE': [10500,"Max, Disney+ Estándar"], 
            'DUO_INCREIBLE': [15000,"Netflix, Disney+ Estándar"], 
            'SUPER_DUO': [16500,"Netflix, Max"], 
            'DUO_FANTASTICO': [16000,"Netflix, Prime video"],
            'DUO_FAVORITO': [10000,"Prime video, Disney+ Estándar"],
        },
        'Tridentes':{
            'TRIO_FAVORITO': [20000, "Netflix, Prime video, Disney+ Estándar"],
            'TRIDENTE': [21000, "Netflix, Prime video, Max"],
            'COMBO_DE_3': [20000, "Netflix, Disney+ Estándar, Max"],
            'COMBO_NUEVO': [12000, "Paramount+, Vix+, Crunchyroll"],
            'TRIPLETA_DEL_MES': [19500, "Netflix, Paramount+, Prime video"],
            'COMBO_DE_LOCURA': [15500, "Disney+ Estándar, Prime video, Max"],
        }, 
        'Combos':{
            'COMBO_INCREIBLE': [15000, "Plex, Crunchyroll, Paramount+, Vix+"],
            'COMBO_DE_SIEMPRE': [24000, "Netflix, Max, Prime video, Disney+ Estándar"],
            'EL_MEJOR_COMBO': [17500, "Paramount+, Max, Prime video, Disney+ Estándar"],
            'COMBO_DE_4': [22500, "Netflix, Paramount+, Disney+ Estándar, Max"],
            'COMBO_DE_PELICULA': [27500, "Netflix, Prime video, Disney+ Estándar, Max, Paramount+"],
            'SUPER_COMBO_DE_PELICULA': [31000, "Netflix, Prime video, Disney+ Estándar, Max, Paramount+, Plex"],
        },};

    let duokeys = Object.keys(prices.Duos);
    let trikeys = Object.keys(prices.Tridentes);
    let combkeys = Object.keys(prices.Combos);

    let src = 'src/routes/combos/collage_streaming.png'

    let activeTab = $state('tab1');

    function handleKeydown(tabId: string, e: KeyboardEvent) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            activeTab = tabId;
        }
    }

    function capitalize(str: string): string {
        return str.split('_')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
            .join(' ');
    }

    let msg = {

    }
</script>

<Header />

<main class="container">
    <section class="head-section">
        <hgroup>
            <h1>Combos PatronPlay</h1>
            <h3>¡Los mejores packs de cuentas especial de la casa!</h3>
        </hgroup>
    </section>

    <div class="container">
        <nav class="container" role="tab-control">
            <ul role="tablist">
                <li role="presentation">
                    <button 
                        role="tab" 
                        id = "tab1-btn"
                        aria-controls="tab1-panel"
                        aria-selected={activeTab === 'tab1'}
                        class:active={activeTab === 'tab1'}
                        on:click={() => activeTab = 'tab1'}
                        on:keydown={(e) => handleKeydown('tab1', e)}>
                        Dúos
                    </button>
                </li>
                <li role="presentation">
                    <button 
                        role="tab" 
                        id = "tab2-btn"
                        aria-controls="tab2-panel"
                        aria-selected={activeTab === 'tab2'}
                        class:active={activeTab === 'tab2'}
                        on:click={() => activeTab = 'tab2'}
                        on:keydown={(e) => handleKeydown('tab2', e)}>
                        Tridentes
                    </button>
                </li>
                <li role="presentation">
                    <button 
                        role="tab" 
                        id = "tab3-btn"
                        aria-controls="tab3-panel"
                        aria-selected={activeTab === 'tab3'}
                        class:active={activeTab === 'tab3'}
                        on:click={() => activeTab = 'tab3'}
                        on:keydown={(e) => handleKeydown('tab3', e)}>
                        Combos
                    </button>
                </li>
            </ul>
        </nav>
        <div role="tabpanel" id="tab1-panel" aria-labelledby="tabla1-btn" hidden={activeTab !== 'tab1'}>
            <figure>
                <div class="grid grid-4">
                    {#each duokeys.slice(0, 4) as key}
                        <div data-tooltip={prices.Duos[key][1]}>
                            <Cards showSelect={false} product={capitalize(key)} price={prices.Duos[key][0]} {src}/>
                        </div>
                    {/each}
                </div>
                <div class="grid grid-4">
                    {#each duokeys.slice(4) as key}
                    <div data-tooltip={prices.Duos[key][1]}>
                        <Cards showSelect={false} product={capitalize(key)} price={prices.Duos[key][0]} {src}/>
                    </div>
                    {/each}
                </div>
            </figure>
        </div>

        <div role="tabpanel" id="tab2-panel" aria-labelledby="tab2-btn" hidden={activeTab !== 'tab2'}>
            <figure>
                <div class="grid grid-3">
                    {#each trikeys.slice(0, 3) as key}
                    <div data-tooltip={prices.Tridentes[key][1]}>
                        <Cards showSelect={false} product={capitalize(key)} price={prices.Tridentes[key][0]} {src}/>
                    </div>
                    {/each}
                </div>
                <div class="grid grid-3">
                    {#each trikeys.slice(3) as key}
                    <div data-tooltip={prices.Tridentes[key][1]}>
                        <Cards showSelect={false} product={capitalize(key)} price={prices.Tridentes[key][0]} {src}/>
                    </div>
                    {/each}
                </div>
            </figure>
        </div>
        <div role="tabpanel" id="tab3-panel" aria-labelledby="tab3-btn" hidden={activeTab !== 'tab3'}>
            <figure>
                <div class="grid grid-3">
                    {#each combkeys.slice(0, 3) as key}
                    <div data-tooltip={prices.Combos[key][1]}>
                        <Cards showSelect={false} product={capitalize(key)} price={prices.Combos[key][0]} {src}/>
                    </div>
                    {/each}
                </div>
                <div class="grid grid-3">
                    {#each combkeys.slice(3) as key}
                    <div data-tooltip={prices.Combos[key][1]}>
                        <Cards showSelect={false} product={capitalize(key)} price={prices.Combos[key][0]} {src}/>
                    </div>
                    {/each}
                </div>
            </figure>
        </div>

        
    </div>
</main>

<style>
    button[role="tab"] {
        cursor: pointer;
        padding: 0.75rem 1.5rem;
        border: 2px solid transparent;
        border-radius: 8px;
        transition: all 0.3s ease;
        background: transparent;
        color: inherit;
        font: inherit;
    }

    button[role="tab"].active {
        color: var(--pico-color-azure-500);
        border: 2px solid var(--primary);
        background-color: color-mix(in srgb, var(--primary) 10%, transparent);
        font-weight: bold;
    }

    button[role="tab"]:hover:not(.active) {
        border: 2px solid var(--primary-hover);
        background-color: color-mix(in srgb, var(--primary) 5%, transparent);
    }

    [role="tablist"] {
        display: flex;
        padding: 0;
        margin: 0;
        list-style: none;
        gap: 1rem;
    }

    [role="tabpanel"] {
        margin-top: 1rem;
    }

    [role="tabpanel"][hidden] {
        display: none;
    }

</style>