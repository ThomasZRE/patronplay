<script lang="ts">
    import '@picocss/pico/css/pico.colors.min.css'
    import { base } from '$app/paths';
    
    
    let {
        product,
        price,
        tag = 0,
        src = "../assets/img/icons/collage_streaming.png",
        showSelect = true,
        //class: className = ''
    } = $props();

   
    function format(locale: string, currency: string, price: number) {
        return new Intl.NumberFormat(locale, {
            style: "currency", 
            currency,
            currencyDisplay: "code"
        })
        .format(price)
        .replace(currency, "")
        .replace(",00", "")
        .trim();
    }

</script>

<article>
    <aside>
        <nav class=container-fluid>
            <ul class="image">
                <img src="{base + src}" alt="{product}">
            </ul>
            <ul class="in-content">
                <hgroup class="product-container">
                    <div class="product-info">
                        <p id="product-name"><strong>{product}</strong></p>
                        <div class="price-container">
                            <p>
                                {#if tag !== 0}
                                <s>${format('es-CO', 'COP', tag)}</s>
                                {/if}  ${format('es-CO', 'COP', price)}</p>
                            <!--
                            {#if showSelect}
                                <select name="products" id="tipo-producto" aria-label="1 pantalla">
                                    <option selected value="1-pantalla">
                                        1 pantalla
                                    </option>
                                    <option value="completa">Cuenta completa (4 pantallas)</option>
                                </select>
                            {/if}
                            -->
                        </div>
                    </div>
                </hgroup>
                <a class="pico-background-jade-400" role="button" href="https://api.whatsapp.com/send?phone=573217336649&text=Hola,%20quiero%20preguntar%20sobre%20{product}">
                    <svg height="24" viewBox="0 0 18 18" width="24" xmlns="http://www.w3.org/2000/svg" style="margin-right: 8px; width: 24px; height: 24px;"><path d="m13.1460703 10.7880226c-.223174-.111869-1.3203713-.6528056-1.5249582-.7274708-.2045869-.07462226-.3533696-.11191195-.5021523.1118691-.1487827.2238669-.576458.7275566-.7066963.8768441-.1301528.1491588-.2603483.1679109-.48347953.055956-.22321685-.1119549-.94233316-.3480514-1.79477143-1.10993685-.66348341-.59290179-1.11137325-1.3251357-1.24156881-1.54904549-.13015272-.22382396-.01383327-.34483308.09790364-.45635886.10038762-.10019727.22317402-.26119948.33473962-.39173485.11160843-.13057828.14878269-.22390978.22317403-.37302563.07439134-.1492875.03721709-.27986578-.01858713-.39177776-.05580421-.11191198-.50215227-1.21262297-.68810921-1.66039962-.18116026-.43593322-.36514714-.37688763-.50215227-.38383922-.13002424-.00647957-.27897824-.00785272-.42771809-.00785272-.14878269 0-.39058667.05595599-.59513074.27977995-.2045869.22390979-.78113051.76488922-.78113051 1.86551438 0 1.10066807.79971764 2.16391771.91132606 2.3131623.1115656.14928749 1.57369596 2.40786697 3.81250276 3.37649777.53247413.2303893.94820051.368005 1.27227611.4709915.5346583.170271 1.0211786.1462408 1.4056837.0886542.4287888-.0641949 1.3204142-.5409365 1.506414-1.0632496.1859569-.522399.1859569-.9700898.1301527-1.0633355-.0557613-.0932886-.204544-.1492875-.4277181-.2612424m-4.14600587 5.5244774h-.00300481c-1.33516282-.0005109-2.64474189-.3562691-3.78721098-1.0287014l-.27167714-.159955-2.8162303.7327188.75167297-2.7233638-.17689705-.279208c-.74484778-1.1750323-1.13821944-2.5330527-1.137662-3.9275601.00163177-4.06908001 3.33962468-7.3795555 7.44397118-7.3795555 1.9874627.0006812 3.8557205.76937603 5.2605948 2.16435172 1.4048313 1.39493311 2.178053 3.24920981 2.1773238 5.22112173-.0016746 4.06942065-3.3396676 7.38015155-7.44088047 7.38015155m6.37738627-13.69672097c-1.6920847-1.68595901-3.9423532-2.61483813-6.33989212-2.61577903-4.93994185 0-8.96046398 4.00099317-8.96244076 8.91880487-.00064461 1.57206773.41203067 3.10649953 1.19634147 4.45921003l-1.27145929 4.6219851 4.75107297-1.2403588c1.30906117.7105911 2.78292602 1.0851536 4.2829188 1.0856668h.00365276.00004297c4.9394262 0 8.9603351-4.0014209 8.9623125-8.91936087.0009018-2.38324918-.9304646-4.62425185-2.6225493-6.3101681" fill="#FFF" fill-rule="evenodd"></path></svg>
                    Compra ya!</a>
            </ul>
        </nav>
    </aside>
</article>

<style>
    [role="button"].pico-background-jade-400 {
        --pico-background-color: var(--pico-color-jade-400);
        --pico-border-color: var(--pico-color-jade-400); 
    }

    [role="button"].pico-background-jade-400:hover {
        --pico-background-color: var(--pico-color-jade-450);
        --pico-border-color: var(--pico-color-jade-450); 
    }

    [role="button"] {
        padding: 0.5rem 1rem 0.5rem 1rem;
    }

    article {
        display: flex;
        flex-direction: column;
        height: 100%;
        width:100%;
        /*
        min-width: 200px;
        max-width: 300px;
        */
        margin: 0 auto;
    }

    .image {
        aspect-ratio: 4/5;  /* Make images square */
        width: 100%;
        padding: 0;
        margin: 0;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 0.5rem 0.5rem 0 0;
    }

    .in-content {
        padding: 1rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: start;
        flex: 1;
    }

    .price-container {
        display: flex;
        align-items: center;
        justify-content: start;
        margin: 0.5rem 0;
    }

    .price-container p {
        font-size:smaller;
    }

    p s {
        color: var(--pico-h6-color);
    }

    [role="button"] {
        width: 100%;
        margin-top: auto;  /* Push button to bottom */
        display: flex;
        align-items: center;
        justify-content: center;
    }

    /* Add responsive grid to parent */
    :global(.grid) {
        display: grid;
        gap: 1rem;
        padding: 1rem;
    }

    :global(.grid-3) {
        grid-template-columns: repeat(3, 1fr);
    }

    :global(.grid-4) {
        grid-template-columns: repeat(4, 1fr);
    }

    @media (max-width: 1200px) {
        :global(.grid-4) {
            grid-template-columns: repeat(4, 1fr);
        }
    }

    @media (max-width: 900px) {
        :global(.grid-3), :global(.grid-4) {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    @media (max-width: 600px) {
        :global(.grid-3), :global(.grid-4) {
            grid-template-columns: 1fr;
        }
    }

    .container-fluid, aside, article {
        padding: 0;
    }

    #product-name {
        margin: 0;
    }

    .product-info {
        margin-right: 0;
    }

    /*
    #tipo-producto {
        padding: 1vh;
        max-width: 50;
        margin-left: 1rem; 
    }
    */

    .container-fluid p {
        font-size: 1rem;
    }
</style>