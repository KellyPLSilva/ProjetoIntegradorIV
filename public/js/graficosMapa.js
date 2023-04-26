google.charts.load('current', {
    'packages': ['geochart'],
});
google.charts.setOnLoadCallback(drawRegionsMap);

function drawRegionsMap(dados) {
    let estado = [
        ['Estado', 'Estado', 'Quantidade'],
        ['BR-AC', 'AC', null],
        ['BR-AL', 'AL', null],
        ['BR-AP', 'AP', null],
        ['BR-AM', 'AM', null],
        ['BR-BA', 'BA', null],
        ['BR-CE', 'CE', null],
        ['BR-DF', 'DF', null],
        ['BR-ES', 'ES', null],
        ['BR-GO', 'GO', null],
        ['BR-MA', 'MA', null],
        ['BR-MS', 'MS', null],
        ['BR-MT', 'MT', null],
        ['BR-MG', 'MG', null],
        ['BR-PA', 'PA', null],
        ['BR-PB', 'PB', null],
        ['BR-PR', 'PR', null],
        ['BR-PE', 'PE', null],
        ['BR-PI', 'PI', null],
        ['BR-RJ', 'RJ', null],
        ['BR-RN', 'RN', null],
        ['BR-RS', 'RS', null],
        ['BR-RO', 'RO', null],
        ['BR-RR', 'RR', null],
        ['BR-SC', 'SC', null],
        ['BR-SP', 'SP', null],
        ['BR-SE', 'SE', null],
        ['BR-TO', 'TO', null],
    ];
    for (let j = 0; j < dados.length; j++) {
        for (let i = 0; i < estado.length; i++) {
            if (estado[i][1] == dados[j]['uf'])
                estado[i] = ['BR-' + dados[j]['uf'], dados[j]['uf'], dados[j]['qtde']];
        }
    }
    var data = google.visualization.arrayToDataTable(estado);

    var options = {
        region: 'BR',
        //displayMode: 'auto',
        resolution: 'provinces',
        forceIFrame: false,
        colorAxis: {
            colors: ['#0B3B17', '#fda630'],
            maxValue: 70
        },
        backgroundColor: '#CEF6F5',
        defaultColor: '#f6f7cd',
        datalessRegionColor: '#E6E6E6',
        enableRegionInteractivity: true,
        tooltip: {
            isHtml: true,
        },
    };

    var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));

    chart.draw(data, options);
}

function tabelaPorUF (data){

    let row = [];
    for (let i = 0; i < data.length; i++) {
       row[i] =  '<tr><th scope="row">'+data[i]['uf']+'</th><td>'+data[i]['qtde']+'</td></tr>'
    }

    $('#table_por_uf>tbody').append(row);
}

$(document).ready(() => {
    fetch('/por-uf').then((data) => data.json()).then((data) => {
        drawRegionsMap(data),
        tabelaPorUF(data)
    });
});
