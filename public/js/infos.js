$(document).ready(function dadosInfos(){
    fetch('/qtde-companhias').then((data) => data.json())
    .then((data) => {
        $('#qtde_companhias').append('<h3>'+data+'</h3>');
    });
    fetch('/mais-antiga').then((data) => data.json())
    .then((data) => {
        $('#companhia_mais_antiga').append('<h3>'+data['nome_empresarial']+'<br><sup style="font-size: 20px">Data da Constituição '+data['data_constituicao']+'</sup></h3>');
    });
});


