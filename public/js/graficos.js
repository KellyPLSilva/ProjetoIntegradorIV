    google.charts.load('current', {
        'packages':['geochart'],
      });
      google.charts.setOnLoadCallback(drawRegionsMap);

      function drawRegionsMap(dados) {
        let estado = [
            ['Estado','Estado','Quantidade'],
            ['BR-AC','AC',null],
            ['BR-AL','AL',null],
            ['BR-AP','AP',null],
            ['BR-AM','AM',null],
            ['BR-BA','BA',null],
            ['BR-CE','CE',null],
            ['BR-DF','DF',null],
            ['BR-ES','ES',null],
            ['BR-GO','GO',null],
            ['BR-MA','MA',null],
            ['BR-MS','MS',null],
            ['BR-MT','MT',null],
            ['BR-MG','MG',null],
            ['BR-PA','PA',null],
            ['BR-PB','PB',null],
            ['BR-PR','PR',null],
            ['BR-PE','PE',null],
            ['BR-PI','PI',null],
            ['BR-RJ','RJ',null],
            ['BR-RN','RN',null],
            ['BR-RS','RS',null],
            ['BR-RO','RO',null],
            ['BR-RR','RR',null],
            ['BR-SC','SC',null],
            ['BR-SP','SP',null],
            ['BR-SE','SE',null],
            ['BR-TO','TO',null],
        ];
        console.log(estado);
         for (let j = 0; j < dados.length; j++) {
            for (let i = 0; i < estado.length; i++) {
                if( estado[i][1] == dados[j]['uf'])
                estado[i] = ['BR-'+dados[j]['uf'],dados[j]['uf'],dados[j]['qtde']];
            }
        } 
        //console.log(estado);
        var data = google.visualization.arrayToDataTable(estado);

        var options = {
            region: 'BR',
            //displayMode: 'auto',
            resolution: 'provinces',
            forceIFrame: false,
            colorAxis: {colors: ['#0B3B17', '#fda630'], maxValue:70},
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


const ctx = document.getElementById('barChart');

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});



const ctx3 = document.getElementById('doughnutChart');

new Chart(ctx3, {
    type: 'doughnut',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

function lineChart(data) {
    const ctx2 = document.getElementById('lineChart');

    let ano = [];
    let homens = [];
    let mulheres = [];
    let cor_m = 'rgba(255, 0, 247, 0.54)';
    let cor_h = 'rgba(3, 0, 255, 0.8)';

    for (let i = 0; i < data.length; i++) {
        ano[i] = data[i]['exercicio_social'];
        homens[i] = data[i]['qtde_homens'];
        mulheres[i] = data[i]['qtde_mulheres'];
    }
        new Chart(ctx2, {
            type: 'line',
            data: {
                labels: ano,
                datasets: [{
                        label: ['Homens'],
                        data: homens,
                        borderWidth: 1,
                        backgroundColor: cor_h,
                        borderColor: cor_h,
                    },
                    {
                        label: ['Mulheres'],
                        data: mulheres,
                        borderWidth: 1,
                        backgroundColor: cor_m,
                        borderColor: cor_m,
                    }
                ]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
}

$(document).ready(() => {
    fetch('/profissionais-data').then((data) => data.json()).then((data) => lineChart(data));
    fetch('/por-uf').then((data) => data.json()).then((data) => drawRegionsMap(data));
});
