<?php include("../inc/client.php");
cabecalho(); ?>
<div class="container">
    <div class="card-txt">
        <div class="card-body">
            <p class="txt-instru"><b>Fulano</b>, agora precisamos saber o seu endereço.</p>
        </div>
    </div>
    <form action="" class="">
        <div class="row">
            <div class="mb-4 col-md-4">
                <p class="font-weight-400 txt-end">Cep</p>
                <input class="form-control" id="cep" maxlength="9" name="cep" data-mask="00000-000" placeholder="Digite o CEP" onblur="pesquisacep(this.value);" />
            </div>
            <div class="mb-4 col-md-4">
                <p class="font-weight-400 txt-end">Endereço</p>
                <input class="form-control" type="text" name="address" id="rua" placeholder="Endereço " />
            </div>
            <div class="mb-4 col-md-2">
                <p class="font-weight-400 txt-end">Número</p>
                <input class="form-control" type="text" name="number" id="number" placeholder="Número" />
            </div>
            <div class="mb-4 col-md-2">
                <p class="font-weight-400 txt-end">Complemento</p>
                <input class="form-control" type="text" name="complement" id="complement" placeholder="Complemento" />
            </div>
            <div class="mb-4 col-md-4">
                <p class="font-weight-400 txt-end">Bairro</p>
                <input class="form-control" type="text " name="neighbor" id="neighbor" placeholder="Bairro " />
            </div>
            <div class="mb-4 col-md-4">
                <p class="font-weight-400 txt-end">Cidade</p>
                <input class="form-control" type="text" name="city" id="city" placeholder="Cidade" />
            </div>
            <div class="mb-4 col-md-2">
                <p class="font-weight-400 txt-end">Estado</p>
                <input class="form-control" type="text" name="state" id="state" placeholder="Estado " />
            </div>
        </div>
    </form>
    <button class="btn-avancar">Avançar</button>
</div>

<?php footer(); ?>