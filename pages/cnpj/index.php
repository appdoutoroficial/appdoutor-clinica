<?php include("../inc/client.php");
cabecalho(); ?>
<div class="container">
    <div class="card-txt">
        <div class="card-body">
            <p class="txt-instru">Seja muito <b>bem vindo!</b></p>
        </div>
        <div class="card-body">
            <p class="txt-instru">Para iniciar a criação da sua conta, insira seu <b>CNPJ</b> abaixo.</p>
        </div>
    </div>
    <div class="campo-cad">
        <input type="text" class="cad-2" data-mask="00.000.000/0000-00" name="cnpj" id="cpf" placeholder="Digite seu CNPJ" aria-label="Recipiente para nickname" aria-describedby="basic-addon2">
    </div>
    <button class="btn-avancar">Avançar</button>
</div>
<?php footer(); ?>