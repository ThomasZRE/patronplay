<script lang="ts">
    //import '@picocss/pico';
    import "../../styles/app.css";
    import '@picocss/pico/css/pico.colors.min.css';
    
    import type { PageData } from './$types';

    let { data }: { data: PageData } = $props();

</script>

<main class="antialiased">
    <div class="container">
        <!-- Título Principal -->
            <h1 class="text-center">NUESTRO SERVICIO</h1>

            <!-- Subtítulo de Bienvenida -->
            <p class="subtitle text-center">
            </p>

            <!-- Mensaje de Servicio e Introducción -->
            <p class="p-title text-center leading-relaxed mb-8">
                ¡Hola! 👋 Bienvenido(a) a Patrón Play: <span class="font-extrabold text-blue-800">Líderes en darle Play a tu Entretenimiento</span> 🎉
                <br>
                Estamos emocionados de darte la bienvenida a tu nuevo destino favorito para el entretenimiento digital. Imagina tener acceso a las <span class="font-bold text-blue-700">mejores plataformas de series, películas y mucho más</span>, todo a precios increíbles y con la calidad y atención que realmente mereces.
            </p>

            <div class="special-container flex">
                <div class="priority-highlight object-top text-center mx-auto max-w-lg">
                    ⭐ ¡Aquí, tu satisfacción y tranquilidad son nuestra prioridad!
                </div>
            </div>

            <!-- Misión y Valores -->
            <p class="text-center mb-8">
                Más allá de simplemente vender un servicio, tu satisfacción y tu confianza son el motor de nuestro trabajo. <span class="font-bold text-blue-700">Nuestra misión</span>: brindarte no solo un producto, sino una <span class="font-bold text-blue-700">experiencia de entretenimiento superior</span>, respaldada por un servicio excepcional que te haga sentir <span class="font-bold text-blue-700">totalmente seguro y a gusto</span> al elegirnos. Queremos que sepas que tu satisfacción y tranquilidad son nuestra mayor recompensa.
            </p>

            <!-- Sección de Pilares con Nuevo Diseño -->
            <div class="pillars-section">
                <p class="pillar-text text-center text-gray-700 mb-12">
                    Por eso, nuestro servicio se asienta sobre <span class="font-bold text-teal-700">tres pilares fundamentales</span> que nos definen:
                </p>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <!-- Pilar 1: Cumplimiento e Integridad -->
                    <div class="pillar-card-new pillar-1 ">
                        <h3 class="ml-3">Cumplimiento e Integridad ✨</h3>
                        <p>Nos destacamos por nuestra <span class="font-semibold text-blue-700">eficiencia, integridad y cumplimiento</span> en la entrega de nuestros servicios. Nuestro compromiso es brindarte una experiencia <span class="font-semibold text-blue-700">confiable, eficaz y de la más alta calidad.</span></p>
                    </div>

                    <!-- Pilar 2: Asistencia y Soporte -->
                    <div class="pillar-card-new pillar-2">
                        <h3 class="ml-3">Asistencia y Soporte 🛠️</h3>
                        <p>¡Estamos <span class="font-semibold text-blue-700">siempre para ti</span>! Nos tomamos muy en serio las garantías y nuestra disposición y dedicación está en ofrecerte <span class="font-semibold text-blue-700">asistencia y soporte técnico</span>. Para nosotros, es sumamente importante brindarte una asesoría detallada y personalizada que resuelva cada una de tus dudas. Además, la resolución rápida y eficaz de cualquier situación es nuestra prioridad, asegurando tu tranquilidad y completa satisfacción.</p>
                    </div>

                    <!-- Pilar 3: Interacción -->
                    <div class="pillar-card-new pillar-3">
                        <h3 class="ml-3">Interacción 🚀</h3>
                        <p>Más allá de vender un servicio, nos motiva ofrecerte una <span class="font-semibold text-blue-700">experiencia excepcional</span>, fomentando la interacción con nuestros clientes a través de dinámicas. Por eso te invitamos a ser parte activa de nuestra comunidad. ¡Síguenos y participa en nuestros <span class="font-semibold text-blue-700">concursos y sorteos</span> para tener la oportunidad de ganar premios increíbles!</p>
                    </div>
                </div>
            </div>

            <!-- Llamada a la acción final -->
            <div class="cta-section">
                <p>
                    Estamos listos para que descubras un mundo de entretenimiento liderado por la calidad y confianza que nos caracteriza.
                </p>
                <a href="https://api.whatsapp.com/send?phone=573217336649&text=Hola,%20me%20interesa%20darle%20Play%20🚀🎮!" class="cta-button">
                    ¡Escríbenos y dale "Play" a Patrón Play! 🚀🎮
                </a>
            </div>
        </div>
</main>


<style>

    main {
        font-family: 'Inter', sans-serif;
        background-color: var(--pico-color-slate-850);
        color: #c2c7d0;
        border: 1px solid var(--pico-color-slate-850);
    }

    .container {
        max-width: 1080px;
        margin: 2.5rem auto;
        padding: 3.5rem;
        background-color:var(--pico-color-slate-950);
        border-radius: 2rem;
        box-shadow: 0 25px 50px rgba(0,0,0,0.08);
        animation: fadeIn 1s ease-out;
    }

    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(30px); }
        to { opacity: 1; transform: translatey(0);}
    }

    h1, h3 {
        font-weight: 700;
    }
    
    h1 {
        font-size:3.5rem;
        color: #1a73e8;
        margin-bottom: 0.5rem;
        line-height: 1.1;
        letter-spacing: -0.07em;
    }
    
    .subtitle {
        font-weight: 600;
        line-height: 1.4;
        padding: 0;
        margin: 0;
    }

        

    h3 {
        font-size: 1.4rem;
        color: #00897b;
        margin-top: 1.5rem;
        margin-bottom: 1rem;
        display: flex;
        align-items: center;
        gap: 0.8rem;
        font-weight: 700;
    }

    p {
        margin-bottom: 1.4rem;
        line-height: 1.8;
        font-size: 1.125rem;
        color: #b6c5d6;
    }

    .p-title {
        margin-bottom: 0;
    }

    .priority-highlight {
        background: linear-gradient(90deg, rgb(215, 230, 255) 6.02%, rgb(199, 228, 255) 51.92%, rgb(220, 226, 255) 96.44%);
        padding: 1.2rem 1.8rem;
        border-radius: 1.75rem;
        font-weight: 900;
        color: #1976d2;
        display: inline-block;
        margin-top: 2.5rem;
        margin-bottom: 2.5rem;
        box-shadow: 0 8px 20px rgba(0,0,0,0.08);
        animation: popIn 0.8s ease-in forwards;
        opacity: 0;
    }

    @keyframes popIn {
        0% { opacity: 0; transform: scale(0.8); }
        100% { opacity: 1; transform: scale(1); }
    }

    .pillars-section {
        margin-top: 4rem;
        margin-bottom: 4rem;
        background-color: #383a3a;
        padding: 3rem;
        border-radius: 2rem;
        box-shadow: inset 0 0 15px rgba(0,0,0,0.05);
    }

    .pillar-text {
        font-size: 1.3rem;
    }

    .pillar-card-new {
        background: linear-gradient(90deg, rgb(215, 230, 255) 6.02%, rgb(199, 228, 255) 51.92%, rgb(220, 226, 255) 96.44%);
        border-radius: 1.5rem;
        box-shadow: 0 10px 25px rgba(0,0,0,0.07);
        transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
        border-left: 8px solid; 
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        text-align: left;
        margin: 0;
        padding: 1rem;
    }

    .pillar-card-new p {
        color: #202124;
    }

    .pillar-card-new:hover {
        transform: translateY(-10px);
        box-shadow: 0 15px 35px rgba(0,0,0,0.15);
    }

    .pillar-card-new.pillar-1 {
        border-color: #3c9ac5;
    }
    .pillar-card-new.pillar-2 {
        border-color: #568f59;
    }
    .pillar-card-new.pillar-3 {
        border-color: #b88231;
    }


    @keyframes bounceIn {
        0% { transform: scale(0.3); opacity: 0; }
        50% { transform: scale(1.05); opacity: 0; }
        70% { transform: scale(0.9); }
        100% { transform: scale(1); }
    }

    .cta-section {
        text-align: center;
        margin-top: 4.5rem;
        padding: 3.5rem;
        background: border-box linear-gradient(90deg,#3b6bff,#2e96ff 45%,#acb7ff) center no-repeat;
        border-radius: 2.5rem;
        box-shadow: 0 15px 30px rgba(97, 97, 97, 0.2);
        color: #ffffff;
    }

    .cta-section p {
        color: #fff;
        font-size: 1.4rem;
        font-weight: 700;
        margin-bottom: 2rem;
        text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.3);
        line-height: 1.5;
    }

    .cta-section .cta-button {
        display: inline-block;
        background: linear-gradient(90deg, rgb(215, 230, 255) 6.02%, rgb(199, 228, 255) 51.92%, rgb(220, 226, 255) 96.44%);
        color: #2196f3;
        padding: 1.2rem 2.8rem;
        border-radius: 50px;
        font-size: 1.6rem;
        font-weight: 900;
        text-decoration: none;
        transition: transform 0.3s ease-in-out, background-color 0.3s ease-in-out, color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
        box-shadow: 0 8px 20px rgba(0,0,0,0.25);
    }

    .cta-section .cta-button:hover {
        transform: translateY(-5px) scale(1.03);
        background-color: #f0f0f0;
        box-shadow: 0 12px 30px rgba(0,0,0,0.35);
    }

    @media (max-width: 576px) {
    .cta-section {
        padding: 2rem 1rem;
    }

    .cta-section .cta-button {
        padding: 1rem 1.5rem;
        font-size: 1.2rem;
        width: 90%;
        max-width: 300px;
        margin: 0 auto;
    }

    .cta-section p {
        font-size: 1.2rem;
        padding: 0 1rem;
    }
}

</style>