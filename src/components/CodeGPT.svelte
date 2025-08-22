<script lang="ts">
    let props = $props();

    let propsDate = new Date(props.date)
    let date = propsDate.toLocaleString('es-CO')

    const myRe = /([0-9]{6})/g;
    const myArr = myRe.exec(props.body);
    let codex = $state('');
    if (myArr) {
        codex = myArr[0];
    } else {
        codex = "Error processing text, please report";
    }

    //console.log(props);
</script>

<div class="content">
    <h3>{props.subject}</h3>
    <p><strong>Fecha: </strong> {date}</p>
    <p><strong>Cuenta: </strong> {props.to}</p>
    <p>Ingresa este código de verificación temporal para continuar: <strong>{codex}</strong></p>
</div>

<style>
    .content {
        background-color: #ffffff;
        padding: 30px 20px;
        border-radius: 12px;
        max-width: 400px;
        width: 90%;
        margin-top: 1rem;
        margin-bottom: 1rem;
    }

    .content h3 {
        justify-self: center;
        font-weight: bold;
    }

    p {
        margin: 1rem;
    }
</style>