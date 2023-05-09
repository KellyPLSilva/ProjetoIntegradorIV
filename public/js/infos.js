$(document).ready(function dadosInfos(){
    fetch('/qtde-companhias').then((data) => data.json())
    .then((data) => {
        $('#qtde_companhias').prepend('<h3>'+data+'</h3>');
    });
    fetch('/mais-antiga').then((data) => data.json())
    .then((data) => {
        $('#companhia_mais_antiga').prepend('<h3>'+data['nome_empresarial']+'<sup style="font-size: 20px">'+data['data_constituicao']+'</sup></h3>');
    });
});


