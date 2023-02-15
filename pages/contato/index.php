<?php include("../inc/client.php");
cabecalho(); ?>
<div class="container">
<div class="card-txt">
    <div class="card-body">
        <p class="txt-instru"><b>Clínica Tal</b>, com qual número de telefone nós podemos usar para te contatar?</p>
    </div>
</div>
<div class="campo-cad">
    <input class="form-control cad-2" type="text" data-mask="(00) 0-0000-0000" placeholder="(11) 9-1234-1234" id="telefone" name="telefone">
</div>
<button class="btn-avancar">Avançar</button>
</div>
<?php footer(); ?>