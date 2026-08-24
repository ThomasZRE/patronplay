<script lang="ts">
  // 1. Catálogo base
  const platforms = [
    { key: 'netflix', label: 'Netflix' },
    { key: 'hbo_max', label: 'HBO Max' },
    { key: 'prime_video_amazon', label: 'Prime Video (Amazon)' },
    { key: 'disney_estandar', label: 'Disney+ Estándar' },
    { key: 'plex', label: 'Plex' },
    { key: 'vix_plus', label: 'ViX+' },
    { key: 'iptv_smarters', label: 'IPTV Smarters' },
    { key: 'crunchyroll', label: 'Crunchyroll' },
    { key: 'paramount_plus', label: 'Paramount+' },
    { key: 'apple_tv', label: 'Apple TV' },
    { key: 'disney_premium', label: 'Disney+ Premium' },
    { key: 'mubi', label: 'MUBI' },
    { key: 'viki', label: 'Viki' },
    { key: 'canva', label: 'Canva' },
    { key: 'dgo', label: 'DGO' },
    { key: 'chatgpt_plus', label: 'ChatGPT Plus' },
    { key: 'gemini', label: 'Gemini' },
    { key: 'youtube_premium', label: 'YouTube Premium' },
    { key: 'spotify', label: 'Spotify' },
  ];

  // 2. Tablas de precios por nivel
  const PRICING: Record<string, Record<string, number>> = {
    duos: {
      netflix: 13500, hbo_max: 4500, prime_video_amazon: 4000, disney_estandar: 4500,
      plex: 4000, vix_plus: 3000, iptv_smarters: 6000, crunchyroll: 4000,
      paramount_plus: 7500, apple_tv: 4500, disney_premium: 7500, mubi: 4500,
      viki: 5000, canva: 3000, dgo: 20000, chatgpt_plus: 0, gemini: 12000,
      youtube_premium: 6000, spotify: 7000
    },
    tridentes: {
      netflix: 13000, hbo_max: 4000, prime_video_amazon: 3500, disney_estandar: 4500,
      plex: 3500, vix_plus: 2500, iptv_smarters: 5500, crunchyroll: 3500,
      paramount_plus: 7000, apple_tv: 4500, disney_premium: 7500, mubi: 4500,
      viki: 4500, canva: 2500, dgo: 20000, chatgpt_plus: 0, gemini: 12000,
      youtube_premium: 5000, spotify: 6500
    },
    combos: {
      netflix: 12000, hbo_max: 3500, prime_video_amazon: 3000, disney_estandar: 4000,
      plex: 3000, vix_plus: 2000, iptv_smarters: 5000, crunchyroll: 3000,
      paramount_plus: 7000, apple_tv: 4000, disney_premium: 7500, mubi: 4000,
      viki: 4000, canva: 2000, dgo: 19500, chatgpt_plus: 0, gemini: 12000,
      youtube_premium: 4500, spotify: 6000
    }
  };

  // 3. Estado con Runa $state
  let selectedKeys = $state<string[]>(['', '']);
  

  // Acciones de actualización de estado
  function addSelect() {
    selectedKeys.push('');
  }

  function removeSelect(index: number) {
    selectedKeys.splice(index, 1);
  }

  function resetSelection() {
    selectedKeys = ['', ''];
  }

  const formatCOP = (val: number) =>
    new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 }).format(val);

  // 4. Derivados con Runas $derived y $derived.by
  const validSelections = $derived(selectedKeys.filter((k) => k !== ''));

  const count = $derived(validSelections.length);

  // Categoría activa (duo, tridente, combo)
  let activeTier = $derived.by(() => {
    if (count <= 2) return PRICING.duos; 
    if (count === 3) return PRICING.tridentes;
    if (count > 3) return PRICING.combos;
  });


  const tierInfo = $derived.by(() => {
    if (count === 2) return { label: 'Dúo', color: 'bg-zinc-500/10 text-zinc-400 border-zinc-500/20' };
    if (count === 3) return { label: 'Tridente', color: 'bg-blue-500/10 text-blue-400 border-blue-500/20' };
    if (count > 3) return { label: `Combo (${count})`, color: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' };
    return { label: 'Sin selección', color: 'bg-zinc-800 text-zinc-500 border-zinc-700' };
  });

  const totalPrice = $derived.by(() => {
    if (count < 2) return 0;

    return validSelections.reduce((sum, key) => sum + (activeTier?.key || 0), 0);

    
  });

  $effect(() => {
    console.log('Selected keys changed:', selectedKeys);
    console.log('Valid selections:', validSelections);
    console.log('Current active tier:', activeTier);
  });

</script>

<div class="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center p-4 sm:p-6 lg:p-8">
  <div class="w-full max-w-4xl grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
    
    <!-- PANEL DE SELECCIÓN -->
    <section class="lg:col-span-7 bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-6">
      <header class="flex items-center justify-between border-b border-slate-800 pb-4">
        <div>
          <h2 class="text-xl font-bold text-white tracking-tight">Arma tu Plan</h2>
          <p class="text-xs text-slate-400">Selecciona las plataformas que deseas combinar</p>
        </div>
        
        <button 
          type="button"
          onclick={resetSelection}
          class="text-xs text-slate-400 hover:text-rose-400 transition-colors cursor-pointer"
        >
          Limpiar todo
        </button>
      </header>

      <div class="space-y-3.5">
        {#each selectedKeys as _, index}
          <div class="flex items-center gap-2">
            <span class="w-6 text-xs font-mono text-slate-500 text-right">{index + 1}.</span>
            
            <div class="relative flex-1">
              <select
                bind:value={selectedKeys[index]}
                class="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-200 
                       focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all
                       hover:border-slate-700 cursor-pointer appearance-none"
              >
                <option value="" disabled>Selecciona una plataforma...</option>
                {#each platforms as platform}
                  <option 
                    value={platform.key}
                    disabled={selectedKeys.includes(platform.key) && selectedKeys[index] !== platform.key}
                  >
                    {platform.label}
                  </option>
                {/each}
              </select>
              
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>

            {#if selectedKeys.length > 1}
              <button
                type="button"
                onclick={() => removeSelect(index)}
                class="p-2.5 text-slate-500 hover:text-rose-400 hover:bg-rose-500/10 rounded-xl transition-all cursor-pointer"
                title="Eliminar pantalla"
              >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            {/if}
          </div>
        {/each}
      </div>

      <button
        type="button"
        onclick={addSelect}
        class="w-full py-3 border border-dashed border-slate-700 hover:border-indigo-500 hover:bg-indigo-500/5 
               text-slate-300 hover:text-indigo-400 font-medium rounded-xl text-sm transition-all flex items-center 
               justify-center gap-2 cursor-pointer"
      >
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
        </svg>
        Agregar otra pantalla
      </button>
    </section>

    <!-- PANEL DE RESUMEN -->
    <section class="lg:col-span-5 bg-gradient-to-b from-slate-900 to-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-6">
      <div>
        <div class="flex items-center justify-between">
          <h3 class="text-base font-semibold text-white">Resumen del Combo</h3>
          <span class="text-xs px-2.5 py-1 rounded-full border font-medium {tierInfo.color}">
            {tierInfo.label}
          </span>
        </div>
        <p class="text-xs text-slate-400 mt-1">Tarifa calculada automáticamente</p>
      </div>

      <div class="space-y-2 border-y border-slate-800/80 py-4 min-h-[140px]">
        {#if validSelections.length === 0}
          <div class="h-full flex flex-col items-center justify-center py-6 text-center text-slate-500">
            <svg class="w-8 h-8 stroke-1 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            <p class="text-xs">No has seleccionado ninguna plataforma</p>
          </div>
        {:else}
          {#each validSelections as key}
            {@const item = platforms.find((p) => p.key === key)}
            {@const itemPrice = PRICING.activeTier?.key || 0}
            <div class="flex items-center justify-between text-sm py-1">
              <span class="text-slate-300 font-medium">{item?.label || key}</span>
              <span class="text-xs text-slate-400">1 Pantalla</span>
              <span class="text-small text-slate-500">{formatCOP(itemPrice)}</span>
              <!--{#if itemPrice !== 0}
                
              {/if} --->
            </div>
          {/each}
        {/if}
      </div>

      <div class="space-y-1">
        <div class="flex items-baseline justify-between">
          <span class="text-xs uppercase tracking-wider text-slate-400 font-semibold">Total a pagar</span>
          <span class="text-2xl font-black text-indigo-400">
            {formatCOP(totalPrice)}
          </span>
        </div>
        <p class="text-[11px] text-slate-500 text-right">Precios expresados en COP</p>
      </div>

      <button
        type="button"
        disabled={count === 0}
        class="w-full bg-indigo-600 hover:bg-indigo-500 disabled:bg-slate-800 disabled:text-slate-600 
               text-white font-semibold py-3 px-4 rounded-xl shadow-lg shadow-indigo-600/20 transition-all 
               cursor-pointer disabled:cursor-not-allowed flex items-center justify-center gap-2 text-sm"
      >
        <span>Solicitar suscripción</span>
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </button>
    </section>

  </div>
</div>