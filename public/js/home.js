function tabelaPorUF (data){

    let row = [];
    for (let i = 0; i < data.length; i++) {
       row[i] =  '<tr><th scope="row">'+data[i]['uf']+'</th><td>'+data[i]['qtde']+'</td></tr>'
    }

    $('#table_por_uf>tbody').append(row);
}

$(document).ready(() => {
    fetch('/por-uf').then((data) => data.json()).then((data) => tabelaPorUF(data));
});