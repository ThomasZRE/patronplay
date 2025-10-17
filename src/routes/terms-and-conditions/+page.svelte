<script lang="ts">
    import "../../app.css";
    import type { PageData } from './$types';

    let { data }: { data: PageData } = $props();
</script>

<main class="bg-gray-100 p-8">
    <div class="container bg-white shadow-lg rounded-lg p-8 md:p-12">
    <h1 class="text-center text-4xl md:text-5xl font-bold text-blue-800 mb-8">Términos y Condiciones de Servicio</h1>
            <!-- Introducción -->
            <p class="text-gray-700 mb-6">
                Bienvenido(a). Al adquirir cualquiera de nuestros productos o servicios, usted (en adelante, el "Usuario") acepta cumplir con los siguientes Términos y Condiciones establecidos por nosotros (en adelante, el "Proveedor"). Le pedimos leerlos detenidamente antes de realizar cualquier compra.
            </p>

            <hr class="my-8 border-gray-300">

            <!-- Sección 1: Descripción del Servicio -->
            <h2 class="text-3xl font-semibold text-blue-700 mb-4">1. Descripción del Servicio</h2>
            <p class="mb-4">
                El Proveedor se dedica a la comercialización de productos digitales con suscripción (cuya duración puede variar según la plataforma específica), mediante un modelo de alquiler de acceso a cuentas. Este modelo se basa en la asignación de perfiles o pantallas de cada plataforma. En ciertos casos, y dependiendo de la plataforma, el Usuario también podrá optar por el alquiler de una Cuenta Completa.
            </p>
            <p class="mb-4">
                Es importante destacar que los perfiles o pantallas son de carácter compartido con otros usuarios, a menos que el Usuario opte por el alquiler de una Cuenta Completa, lo que le otorgará acceso exclusivo a todas las pantallas disponibles. El Proveedor declara no ser un representante oficial ni tener relación directa con las empresas propietarias de estas plataformas; por lo tanto, la prestación del servicio está sujeta a las políticas y condiciones de dichas empresas oficiales.
            </p>
            <p class="mb-4">
                Al adquirir nuestros servicios a un costo inferior a los precios oficiales, el Usuario comprende y acepta que pueden presentarse <strong>fallos, errores o interrupciones ocasionales</strong> en el servicio. A continuación, se detallan definiciones importantes y las condiciones de garantía asociadas.
            </p>

            <h3 class="text-2xl font-medium text-blue-600 mt-6 mb-3">1.1. Horario de Atención</h3>
            <p class="mb-4">
                Nuestro equipo de soporte está disponible para atender sus solicitudes en los siguientes horarios:
            </p>
            <ul class="list-disc ml-6 mb-4 text-gray-700">
                <li><strong>Lunes a Viernes:</strong> 9:00 AM a 9:00 PM (hora local de Colombia)</li>
                <li><strong>Sábados, Domingos y Festivos:</strong> 11:00 AM a 8:00 PM (hora local de Colombia)</li>
            </ul>

            <hr class="my-8 border-gray-300">

            <!-- Sección 2: Definiciones Clave -->
            <h2 class="text-3xl font-semibold text-blue-700 mb-4">2. Definiciones Clave</h2>

            <h3 class="text-2xl font-medium text-blue-600 mt-6 mb-3">2.1. Definición de Perfil o Pantalla</h3>
            <p class="mb-4">
                Se refiere al <strong>perfil particular que se le asigna al Usuario dentro de una cuenta compartida</strong>. El uso de la cuenta se limita estrictamente a este perfil único.
            </p>

            <h3 class="text-2xl font-medium text-blue-600 mt-6 mb-3">2.2. Definición de Cuenta Completa</h3>
            <p class="mb-4">
                Implica el <strong>acceso total a todos los perfiles disponibles de la plataforma</strong>, permitiendo al Usuario utilizar el número máximo de dispositivos simultáneos autorizados por la plataforma, de acuerdo con sus políticas.
            </p>

            <h3 class="text-2xl font-medium text-blue-600 mt-6 mb-3">2.3. Definición de Caída del Servicio</h3>
            <p class="mb-4">
                Se entiende como toda situación en la que <strong>se pierde el acceso completo a la suscripción adquirida antes de finalizar el periodo contratado</strong>, lo que impide el uso normal y continuo de la plataforma 
            </p>
            <p class="foq font-semibold text-gray-400">No se considerará una caída del servicio cuando:</p>
            <ul class="list-disc ml-6 mb-4 text-gray-700">
                <li>La suscripción permanezca activa, pero alguna función específica esté temporalmente restringida debido a políticas internas de la plataforma (ej., limitación a ciertos modelos de inteligencia artificial, contenido geo-restringido o que requiera un pago adicional).</li>
                <li>La sesión de la cuenta se cierre automáticamente (esto corresponde a una pérdida de autenticación y generalmente se resuelve volviendo a iniciar sesión).</li>
                <li>Se active una verificación en dos pasos que solicite un código por políticas de seguridad de la plataforma.</li>
                <li>Aparezca un mensaje relacionado con políticas de geolocalización, como “esta cuenta no forma parte del hogar”.</li>
            </ul>
            <p class="note">
                <strong class="pico-color-azure-400">Nota:</strong> En estos casos, el Proveedor brindará el soporte necesario para restablecer el acceso, pero estas situaciones no se considerarán "caídas válidas" para efectos de reembolsos o reposición de tiempo.
            </p>

            <h3 class="text-2xl font-medium text-blue-600 mt-6 mb-3">2.4. Definición de Caída Masiva del Servicio</h3>
            <p class="mb-4">
                Se considera una caída masiva cuando <strong>la mayoría o la totalidad de las cuentas activas de una misma plataforma experimentan una "caída del servicio"</strong> según la definición anterior.
            </p>

            <hr class="my-8 border-gray-300">

            <!-- Sección 3: Condiciones de Uso -->
            <h2 class="text-3xl font-semibold text-blue-700 mb-4">3. Condiciones de Uso</h2>

            <h3 class="text-2xl font-medium text-blue-600 mt-6 mb-3">3.1. Condiciones Generales</h3>
            <p class="mb-4">
                Las siguientes normas de uso aplican a todos nuestros servicios sin distinción alguna:
            </p>
            <ul class="list-disc ml-6 mb-4 text-gray-700">
                <li>
                    <strong>Integridad de la Cuenta:</strong> El Usuario se compromete a no modificar contraseñas, correos electrónicos o configuraciones de seguridad de la cuenta sin la autorización expresa del Proveedor. Cualquier intento de modificación no autorizado está estrictamente prohibido.
                </li>
                <li>
                    <strong>Uso Exclusivo y Simultáneo:</strong> La cuenta asignada es para uso exclusivo del Usuario y <strong>no está permitido compartirla con terceros no autorizados</strong>. El uso de la cuenta está limitado a un solo dispositivo a la vez. Si el Usuario desea utilizar la cuenta en un dispositivo diferente, debe cerrar la sesión en el dispositivo actual antes de iniciarla en el nuevo.
                </li>
                <li>
                    <strong>Compras y Modificaciones Externas:</strong> El servicio provisto es exclusivamente para el acceso a contenido existente (streaming o uso de funcionalidades preestablecidas). <strong>No está permitido realizar compras, alquileres o suscripciones a servicios adicionales</strong> que ofrezcan las plataformas y que impliquen un pago extra. Asimismo, se prohíbe la modificación o adquisición de planes adicionales dentro de la misma cuenta sin la autorización explícita del Proveedor.
                </li>
                <li>
                    <strong>Respeto a la Privacidad de Otros Usuarios:</strong> Está estrictamente prohibido acceder, visualizar o modificar perfiles de otros usuarios dentro de la cuenta compartida.
                </li>
            </ul>

            <h3 class="text-2xl font-medium text-blue-600 mt-6 mb-3">3.2. Condiciones Específicas por Plataforma</h3>
            <p class="mb-4">
                Se establecen condiciones de uso específicas para cada plataforma individual, junto con una breve explicación de su naturaleza y limitaciones:
            </p>

            <h4 class="text-xl font-semibold text-blue-400 mt-5 mb-2">3.2.1. Netflix</h4>
            <p class="mb-3 text-gray-700">
                Netflix implementa políticas estrictas de geolocalización para prevenir el uso compartido de cuentas entre diferentes redes Wi-Fi domésticas. Esto puede activar bloqueos de contraseña o restablecimientos, y la detección de redes Wi-Fi no asociadas al hogar de la cuenta. Para mitigar estos inconvenientes, siga las siguientes indicaciones:
            </p>
            <ul class="list-disc ml-6 mb-4 text-gray-700">
                <li>
                    <strong>Uso de Redes:</strong> Evite el uso de su cuenta en redes Wi-Fi públicas. Úsela exclusivamente con su servicio de internet doméstico o con sus datos móviles.
                </li>
                <li>
                    <strong>Errores de Geolocalización:</strong> Cuando aparezca un error indicando que su dispositivo no forma parte del hogar de Netflix, debe seleccionar la opción <strong>"Estoy de viaje" o "Ver temporalmente"</strong> (según corresponda), y <strong>NUNCA</strong> la opción "Actualizar hogar", a menos que el Proveedor le indique lo contrario. Notifique al Proveedor para recibir un código de acceso si es necesario.
                </li>
                <li>
                    <strong>Recomendación de Dispositivo:</strong> Se sugiere elegir un único dispositivo para disfrutar de su cuenta y evitar cambiarlo con frecuencia. Los inicios de sesión reiterados en distintos dispositivos pueden provocar errores de "contraseña incorrecta".
                </li>
                <li>
                    <strong>Aclaración sobre Errores de Acceso:</strong> Los errores de "contraseña incorrecta" y las detecciones de "Wi-Fi hogar" no son generados ni modificados por el Proveedor. Estos son directamente producidos por las políticas de geolocalización de Netflix y pueden presentarse al menos una vez al mes.
                </li>
            </ul>

            <h4 class="text-xl font-semibold text-blue-500 mt-5 mb-2">3.2.2. Disney+</h4>
            <p class="mb-3 text-gray-700">
                Disney+ ofrece planes estándar (con anuncios) y premium (sin anuncios). Esta plataforma también aplica políticas estrictas de geolocalización y detección de dispositivos, lo que puede generar solicitudes de códigos de verificación o restablecimientos de contraseña. Para un uso óptimo, siga estas indicaciones:
            </p>
            <ul class="list-disc ml-6 mb-4 text-gray-700">
                <li>
                    <strong>Uso de Redes:</strong> No utilice su cuenta en redes Wi-Fi públicas. El uso se limita a su servicio de internet doméstico o datos móviles.
                </li>
                <li>
                    <strong>Errores de Geolocalización:</strong> Si su dispositivo no forma parte del hogar de Disney+, seleccione <strong>"Estoy fuera de casa" o "Ver temporalmente"</strong>, y <strong>NUNCA</strong> "Actualizar hogar", a menos que el Proveedor le indique lo contrario. Notifique al Proveedor para recibir un código de acceso si es necesario.
                </li>
                <li>
                    <strong>Recomendación de Dispositivo y Cierre de Sesión:</strong> Disney+ solicitará códigos de verificación con frecuencia. Se recomienda encarecidamente elegir un único dispositivo y no cambiarlo. Los inicios de sesión reiterados en múltiples dispositivos generarán más códigos. Asimismo, se sugiere no cerrar sesión en el dispositivo elegido.
                </li>
                <li>
                    <strong>Aclaración sobre Códigos y Contraseñas:</strong> Los códigos de verificación son una medida de seguridad inherente de Disney+ y no son gestionados ni eliminados por el Proveedor. Los errores de "contraseña incorrecta" también son el resultado de las políticas de protección de cuenta de Disney+.
                </li>
            </ul>

            <h4 class="text-xl font-semibold text-blue-500 mt-5 mb-2">3.2.3. Amazon Prime Video</h4>
            <p class="mb-3 text-gray-700">
                Esta plataforma está vinculada al servicio de Amazon y puede ofrecer películas o series con costo adicional a la suscripción.
            </p>
            <ul class="list-disc ml-6 mb-4 text-gray-700">
                <li>
                    <strong>Prohibición de Compras Adicionales:</strong> Está estrictamente prohibido comprar o intentar comprar cualquier servicio adicional (películas, series, etc.) que ofrezca la plataforma con costo extra.
                </li>
                <li>
                    <strong>Variación de Contenido por Ubicación:</strong> El contenido de Prime Video puede variar significativamente según la ubicación geográfica. Se sugiere consultar al Proveedor si la película o serie de su interés se encuentra disponible en la versión de la cuenta.
                </li>
            </ul>

            <h4 class="text-xl font-semibold text-blue-500 mt-5 mb-2">3.2.4. IPTV Smarters Pro</h4>
            <p class="mb-3 text-gray-700">
                IPTV Smarters Pro es un sistema de transmisión de televisión por internet, no una empresa de streaming tradicional. Para su funcionamiento, requiere de aplicaciones específicas y una conexión a internet estable.
            </p>
            <ul class="list-disc ml-6 mb-4 text-gray-700">
                <li>
                    <strong>Compatibilidad de Dispositivo:</strong> Verifique que su dispositivo cuente con la aplicación compatible necesaria para disfrutar del servicio IPTV.
                </li>
                <li>
                    <strong>Pruebas Gratuitas:</strong> Ofrecemos pruebas gratuitas para que el Usuario pueda verificar el correcto funcionamiento del servicio en sus dispositivos y con su conexión de red Wi-Fi antes de adquirir la suscripción.
                </li>
                <li>
                    <strong>Aclaración sobre Errores de Transmisión:</strong> Dada la naturaleza del servicio IPTV, pueden presentarse errores, interrupciones o retrasos en la transmisión. Estos inconvenientes se deben a factores ajenos al Proveedor, como la calidad de la conexión a internet del Usuario, la compatibilidad del dispositivo o la inestabilidad del servidor de IPTV.
                </li>
            </ul>

            <h4 class="text-xl font-semibold text-blue-500 mt-5 mb-2">3.2.5. Apple TV</h4>
            <p class="mb-3 text-gray-700">
                Las cuentas de Apple TV que gestionamos no están diseñadas para ser utilizadas directamente desde la aplicación oficial de Apple TV en dispositivos móviles.
            </p>
            <ul class="list-disc ml-6 mb-4 text-gray-700">
                <li>
                    <strong>Acceso desde Navegador:</strong> En teléfonos móviles y computadoras, el acceso a la cuenta debe realizarse exclusivamente a través de un navegador web.
                </li>
                <li>
                    <strong>Navegador en Dispositivos Apple:</strong> Si su dispositivo es Apple (ej. iPhone o iPad), deberá descargar e instalar un navegador alternativo como Google Chrome, ya que Safari no permite el acceso a nuestras cuentas de Apple TV.
                </li>
            </ul>

            <h4 class="text-xl font-semibold text-blue-500 mt-5 mb-2">3.2.6. ChatGPT Plus</h4>
            <p class="mb-3 text-gray-700">
                ChatGPT Plus, una inteligencia artificial desarrollada por OpenAI, aplica políticas estrictas sobre el uso compartido de cuentas. Sus sistemas de detección pueden bloquear modelos y funciones básicas (como la carga de archivos) si detectan uso compartido. La cuenta es compartida con un máximo de 5 personas adicionales (total de hasta 6 usuarios por cuenta). Para un uso adecuado, siga las siguientes indicaciones:
            </p>
            <ul class="list-disc ml-6 mb-4 text-gray-700">
                <li>
                    <strong>Uso de Redes:</strong> No utilice su cuenta en redes Wi-Fi públicas.
                </li>
                <li>
                    <strong>Uso de Dispositivo Único:</strong> La cuenta debe ser utilizada estrictamente en un solo dispositivo. No debe cambiar de dispositivo sin previa consulta y evaluación de viabilidad con el Proveedor.
                </li>
                <li>
                    <strong>Prohibición de VPN:</strong> Está rotundamente prohibido el uso de redes privadas virtuales (VPN) para acceder a la cuenta. El acceso solo está permitido con una dirección IP colombiana.
                </li>
                <li>
                    <strong>Respeto a la Privacidad de Otros Usuarios:</strong> En nuestro servicio, el respeto y la privacidad de los proyectos y avances de cada usuario son <strong>valores fundamentales e innegociables.</strong> Por ello, está estrictamente prohibido acceder, modificar o eliminar chats, proyectos o cualquier contenido que pertenezca a otros usuarios sin autorización. El incumplimiento de esta norma implicará la pérdida de la garantía y la <strong>prohibición permanente de volver a adquirir cualquiera de nuestros servicios.</strong>
                </li>
                <li>
                    <strong>Modificación de Seguridad y Suscripción:</strong> Se prohíbe modificar o intentar modificar datos de seguridad y suscripción. El plan gestionado es el "Plan Plus"; cualquier intento de cambiarlo resultará en la pérdida de garantía y el veto permanente de nuestros servicios.
                </li>
                <li>
                    <strong>Aclaración sobre Bloqueos y Contraseña:</strong>
                    <ul class="list-circle ml-6 mt-2 text-gray-700">
                        <li>Dado que la cuenta es compartida, pueden presentarse bloqueos temporales de modelos y funciones. En la sección de garantías se detalla cómo se gestionarán estos casos.</li>
                        <li>Los códigos de acceso son una medida de seguridad de OpenAI y no pueden ser eliminados por el Proveedor.</li>
                        <li>Por motivos de seguridad y para gestionar los bloqueos, el Proveedor modificará la contraseña de la cuenta con frecuencia.</li>
                    </ul>
                </li>
                <li>
                    <strong>Recomendación de Uso Moderado:</strong> Se sugiere evitar la saturación de peticiones. La eficiencia de los modelos depende tanto del número de usuarios globales como del uso individual de cada cuenta. Un uso moderado no solo garantiza una mejor experiencia para todos, sino que también contribuye al <a href="https://www.unep.org/news-and-stories/story/ai-has-environmental-problem-heres-what-world-can-do-about">cuidado del medio ambiente y al uso responsable de los recursos.</a>
                </li>
                <li>
                    <strong>Sugerencia para Bloqueos de Función:</strong> Cuando se presenten errores que bloqueen modelos o funciones como la carga de archivos, el Usuario puede utilizar temporalmente los "chats especializados" de ChatGPT que permiten seguir subiendo archivos, mientras el Proveedor soluciona el inconveniente.
                </li>
            </ul>
            <p class="note">
                <strong class="pico-color-azure-400">Nota sobre "Sugerencias":</strong> Una "sugerencia" debe entenderse como una invitación o recomendación no obligatoria, cuyo fin es mejorar la experiencia del Usuario con el servicio y minimizar posibles errores o interrupciones.
            </p>

            <hr class="my-8 border-gray-300">

            <!-- Sección 4: Garantías -->
            <h2 class="text-3xl font-semibold text-blue-700 mb-4">4. Garantías</h2>
            <p class="mb-4">
                La garantía se ofrece al Usuario siempre que este haya cumplido estrictamente con todas las normas de uso previamente definidas. La duración de la garantía corresponde al período de vigencia del servicio adquirido (ej., si se adquiere 1 mes de servicio, equivalente a 30 días, la garantía cubre esos 30 días).
            </p>
            <p class="foq font-semibold text-gray-800">En caso de que el Usuario haya respetado las normas de uso:</p>
            <ul class="list-disc ml-6 mb-4 text-gray-700">
                <li>
                    El Proveedor garantizará la funcionalidad de la cuenta bajo condiciones normales. En caso de una caída del servicio, se harán todos los esfuerzos para restablecer la cuenta. Si no es posible, se asignará una cuenta nueva.
                </li>
                <li>
                    El tiempo de resolución de garantías dependerá de la naturaleza y gravedad del problema. El Proveedor buscará brindar, generalmente, una solución inmediata; sin embargo, en casos extremos de fallas graves (ej., caída masiva del servicio), el tiempo de respuesta podría extenderse entre 8 y 48 horas.
                </li>
                <li>
                    El tiempo que el Usuario permanezca sin acceso o con la cuenta inoperable será compensado. El Usuario tiene derecho a exigir el cumplimiento de la totalidad del período contratado. Asimismo, el tiempo que el Proveedor demore en solucionar interrupciones de servicio relacionadas con códigos de verificación o errores de "hogar" en plataformas como Netflix y Disney+ también será debidamente compensado.
                </li>
                <li>
                    <strong>Garantía Específica para ChatGPT Plus:</strong> Dadas sus condiciones de uso compartidas, ChatGPT Plus puede experimentar bloqueos temporales de modelos y funciones. Se garantiza un acceso funcional a los modelos principales durante al menos el 85% del periodo contratado. Durante los períodos de bloqueo temporal, el Usuario podrá seguir utilizando el "modelo mini" o los "chats especializados", lo que implica que el acceso a la cuenta no se perderá por completo y el tiempo de vigencia del plan no se verá modificado. Si el Proveedor le retira el acceso completo a la cuenta, el tiempo sin acceso será debidamente compensado. El tiempo de resolución de los bloqueos puede tardar entre 6 y 24 horas.
                </li>
            </ul>
            <p class="note">
                <strong class="pico-color-azure-400">Exclusiones de la Garantía:</strong> La garantía <strong>NO</strong> cubre fallos causados por errores en la conexión a internet del Usuario, problemas generales en los servidores de las empresas de las plataformas (ej., si Netflix o OpenAI anuncian fallos en sus sistemas que impiden el acceso global), ni fallos en las aplicaciones o incompatibilidad con los dispositivos del Usuario. En estos casos, el Proveedor ofrecerá sugerencias para posibles soluciones.
            </p>

            <h3 class="text-2xl font-medium text-blue-600 mt-6 mb-3">4.1. Pérdida de Garantía</h3>
            <p class="mb-4">
                El Usuario perderá la garantía y el servicio será retirado sin derecho a reembolso si incumple cualquiera de las normas estipuladas en la sección "Condiciones de Uso".
            </p>
            <ul class="list-disc ml-6 mb-4 text-gray-700">
                <li>
                    El desconocimiento de estas normas por la falta de lectura de los Términos y Condiciones no exime al Usuario de la pérdida de garantía, a menos que el Proveedor no le haya proporcionado la información de los mismos.
                </li>
                <li>
                    El incumplimiento de la norma relacionada con la modificación o intento de modificación del plan o suscripción no solo implicará la pérdida de garantía, sino también el veto permanente del Usuario para adquirir cualquier servicio futuro con el Proveedor.
                </li>
                <li>
                    El incumplimiento de la norma (iv) de las condiciones específicas de ChatGPT Plus (acceso, modificación o eliminación de chats/proyectos de otros usuarios) resultará en la pérdida de garantía y el veto permanente de todos nuestros servicios.
                </li>
            </ul>

            <h3 class="text-2xl font-medium text-blue-600 mt-6 mb-3">4.2. Política de Reembolsos</h3>
            <p class="mb-4">
                No se realizarán reembolsos una vez iniciado el servicio, con las siguientes excepciones:
            </p>
            <ul class="list-disc ml-6 mb-4 text-gray-700">
                <li>
                    <strong>Imposibilidad de Prestación del Servicio Inicial:</strong> Si el Proveedor no ha podido prestar el servicio dentro de las primeras <strong>5 horas hábiles</strong> posteriores a la confirmación del pago, se realizará un <strong>reembolso total</strong> del monto pagado.
                </li>
                <li>
                    <strong>Caída Masiva Prolongada:</strong> En caso de una "Caída Masiva del Servicio" (definida en la sección 2.4) donde el Proveedor tarde <strong>más de 48 horas</strong> en brindar una solución de garantía, el Usuario tendrá derecho a solicitar un <strong>reembolso parcial</strong> proporcional al número de días restantes del servicio no disfrutado.
                </li>
                <li>
                    <strong>Caídas Recurrentes:</strong> Si un servicio de 30 días presenta <strong>más de 3 "Caídas del Servicio"</strong> (definidas en la sección 2.3) en un mismo mes, el Usuario tendrá derecho a solicitar un <strong>reembolso parcial</strong> proporcional al número de días restantes del servicio no disfrutado.
                </li>
            </ul>

            <hr class="my-8 border-gray-300">

            <!-- Sección 5: Precios y Pagos -->
            <h2 class="text-3xl font-semibold text-blue-700 mb-4">5. Precios y Pagos</h2>
            <ul class="list-disc ml-6 mb-4 text-gray-700">
                <li>
                    <strong>Ajuste de Precios:</strong> Los precios de nuestros servicios pueden ser ajustados sin previo aviso.
                </li>
                <li>
                    <strong>Pagos Atrasados y Reasignación de Perfil:</strong> En caso de no renovar el servicio a tiempo, la cuenta o pantalla asignada podría ser reasignada a otro cliente sin previo aviso.
                </li>
            </ul>

            <hr class="my-8 border-gray-300">

            <!-- Sección 6: Modificaciones de los Términos -->
            <h2 class="text-3xl font-semibold text-blue-700 mb-4">6. Modificaciones de los Términos</h2>
            <p class="mb-4">
                El Proveedor se reserva el derecho de modificar estos Términos y Condiciones en cualquier momento. Cualquier cambio será anunciado previamente y la fecha de la última actualización se indicará en la parte superior del documento. Asimismo, en caso de realizarse modificaciones, el Proveedor se compromete a notificar públicamente a sus clientes por los medios de comunicación habituales.
            </p>
        </div>
</main>


<style>
    @import "tailwindcss";

    main {
        font-family: 'Inter', sans-serif;
        background-color: var(--pico-background);
        color: #000;
    }

    .container {
        background-color: var(--pico-color-slate-950);
        max-width: 960px;
        margin: 0 auto; 
        padding: 2rem;
    }

    h1, h2, h3 {
        color: #2c5282;
        color: var(--color-blue-500);
        font-weight: 600;
    }

    h1 {
        font-size: 2.5rem;
        margin-bottom: 1.5rem;
    }

    h2 {
        font-size: 2rem;
        margin-top: 2rem;
        margin-bottom: 1rem;
        padding-bottom: 0.5rem;
        border-bottom: 2px solid #cbd5e0;
    }

    h3 {
        font-size: 1.5rem;
        margin-top: 1.5rem;
        margin-bottom: 0.75rem;
    }

    h4 {
        color: var(--pico-color-blue-450);
    }

    p {
        margin-bottom: 1rem;
        line-height: 1.6;
    }    

    .foq {
        color: var(--pico-color-grey-50);
    }

    ul {
        list-style-type: disc;
        margin-left: 1.5rem;
        margin-bottom: 1rem;
    }

    ol {
        list-style-type: decimal;
        margin-left: 1.5rem;
        margin-bottom: 1rem;
    }

    li {
        margin-bottom: 0.5rem;
    }

    .note {
        background-color: var(--pico-color-grey-700);
        border-left: 4px solid #4299e1;
        border-left: 4px solid var(--pico-color-blue-600);
        padding: 1rem;
        margin-bottom: 1.5rem;
        border-radius: 0.25rem;
        color: var(--pico-color-grey-50);
    }
</style>