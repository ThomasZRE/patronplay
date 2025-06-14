<script lang="ts">
	import Cards from '../../components/Cards.svelte';
	import Header from '../Header.svelte';
    import type { PageData } from './$types';


    let { data }: { data: PageData } = $props();

    let prices = {
        'Duos':{
            'DUO_DE_PROMO': [11500, "Max, Prime video", "max_prime.png"],
            'DUO_DINAMICO': [15000, "Paramount+, Netflix", "paramount_netflix.png"],
            'DUO_NUEVO': [9000,"Crunnchyroll, Paramount+", "paramount_crunchyroll.png"],
            'DUO_DE_SIEMPRE': [10500,"Max, Disney+ Estándar", "max_disney.png"], 
            'DUO_INCREIBLE': [15000,"Netflix, Disney+ Estándar", "netflix_disney.png"], 
            'SUPER_DUO': [16500,"Netflix, Max", "netflix_max.png"], 
            'DUO_FANTASTICO': [16000,"Netflix, Prime video", "netflix_prime.png"],
            'DUO_FAVORITO': [10000,"Prime video, Disney+ Estándar", "prime_disney.png"],
        },
        'Tridentes':{
            'TRIO_FAVORITO': [20000, "Netflix, Prime video, Disney+ Estándar", "netflix_prime_disney.png"],
            'TRIDENTE': [21000, "Netflix, Prime video, Max", "netflix_prime_max.png"],
            'COMBO_DE_3': [20000, "Netflix, Disney+ Estándar, Max", "netflix_disney_max.png"],
            'COMBO_NUEVO': [12000, "Paramount+, Vix+, Crunchyroll", "paramount_vix_crunchyroll.png"],
            'TRIPLETA_DEL_MES': [19500, "Netflix, Paramount+, Prime video", "netflix_paramount_prime.png"],
            'COMBO_DE_LOCURA': [15500, "Disney+ Estándar, Prime video, Max", "disney_prime_max.png"],
        }, 
        'Combos':{
            'COMBO_INCREIBLE': [15000, "Plex, Crunchyroll, Paramount+, Vix+", "plex_crunchyroll_paramount_vix.png"],
            'COMBO_DE_SIEMPRE': [24000, "Netflix, Max, Prime video, Disney+ Estándar", "netflix_max_prime_disney.png"],
            'EL_MEJOR_COMBO': [17500, "Paramount+, Max, Prime video, Disney+ Estándar", "paramount_max_prime_disney.png"],
            'COMBO_DE_4': [22500, "Netflix, Paramount+, Disney+ Estándar, Max", "netflix_paramount_disney_max.png"],
            'COMBO_DE_PELICULA': [27500, "Netflix, Prime video, Disney+ Estándar, Max, Paramount+", "netflix_prime_disney_max_paramount.png"],
            'SUPER_COMBO_DE_PELICULA': [31000, "Netflix, Prime video, Disney+ Estándar, Max, Paramount+, Plex", "netflix_prime_disney_max_paramount_plex.png"],
        },
    };

    let duokeys = Object.keys(prices.Duos);
    let trikeys = Object.keys(prices.Tridentes);
    let combkeys = Object.keys(prices.Combos);

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

    let src = "src/assets/img/duos/max_prime.png"

    let msg = {

    }
</script>

<Header />

<main class="container">
    <section class="head-section">
        <hgroup>
            <h1>Combos Patrón Play</h1>
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
                            <Cards showSelect={false} product={capitalize(key)} price={prices.Duos[key][0]} src={`src/lib/assets/img/duos/${prices.Duos[key][2]}`}/>
                        </div>
                    {/each}
                </div>
                <div class="grid grid-4">
                    {#each duokeys.slice(4) as key}
                    <div data-tooltip={prices.Duos[key][1]}>
                        <Cards showSelect={false} product={capitalize(key)} price={prices.Duos[key][0]} src={`src/lib/assets/img/duos/${prices.Duos[key][2]}`}/>
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
                        <Cards 
                            showSelect={false} 
                            product={capitalize(key)} 
                            price={prices.Tridentes[key][0]} 
                            src={`src/lib/assets/img/tridentes/${prices.Tridentes[key][2]}`}
                        />
                    </div>
                    {/each}
                </div>
                <div class="grid grid-3">
                    {#each trikeys.slice(3) as key}
                    <div data-tooltip={prices.Tridentes[key][1]}>
                        <Cards 
                            showSelect={false} 
                            product={capitalize(key)} 
                            price={prices.Tridentes[key][0]} 
                            src={`src/lib/assets/img/tridentes/${prices.Tridentes[key][2]}`}
                        />
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
                        <Cards 
                            showSelect={false} 
                            product={capitalize(key)} 
                            price={prices.Combos[key][0]} 
                            src={`src/lib/assets/img/combos/${prices.Combos[key][2]}`}
                        />
                    </div>
                    {/each}
                </div>
                <div class="grid grid-3">
                    {#each combkeys.slice(3) as key}
                    <div data-tooltip={prices.Combos[key][1]}>
                        <Cards 
                            showSelect={false} 
                            product={capitalize(key)} 
                            price={prices.Combos[key][0]} 
                            src={`src/lib/assets/img/combos/${prices.Combos[key][2]}`}
                        />
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