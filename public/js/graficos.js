function barChart(data) {
    const ctx = document.getElementById('barChart');

    let setor_atividade = [];
    let qtde = [];

    for (let i = 0; i < data.length; i++) {
        setor_atividade[i] = data[i]['setor_atividade'];
        qtde[i] = data[i]['qtde'];
    }
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: setor_atividade,
            datasets: [{
                label: 'Companhia por setor de atividade',
                data: qtde,
                borderWidth: 1,
                backgroundColor: [
                    'rgba(255, 99, 132,0.7)',
                    'rgba(255, 159, 64,0.7)',
                    'rgba(255, 205, 86,0.7)',
                    'rgba(75, 192, 192,0.7)',
                    'rgba(54, 162, 235,0.7)',
                    'rgba(153, 102, 255,0.7)',
                    'rgba(201, 203, 207,0.7)'
                  ],
            }]
        },
        options: {
            /* indexAxis: 'y', */
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

function pieChart(data) {
    const ctx3 = document.getElementById('pieChart');
    let labels = [];
    let qtde = [];

    for (let i = 0; i < data.length; i++) {
        labels[i] = data[i]['especie_controle_acionario'];
        qtde[i] = data[i]['qtde'];
    }

    new Chart(ctx3, {
        type: 'pie',
        data: {
            labels: labels,
            datasets: [{
                data: qtde,
                borderWidth: 1
            }]
        },
        options: {
            /* scales: {
                y: {
                    beginAtZero: true
                }
            } */
        }
    });
}

function lineChart(data) {
    const ctx2 = document.getElementById('lineChart');

    let ano = [];
    let homens = [];
    let mulheres = [];
    let cor_m = 'rgba(255, 0, 247, 0.74)';
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
            animations: {
                tension: {
                  duration: 1000,
                  easing: 'linear',
                  from: 1,
                  to: 0,
                  loop: true
                }
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

function barChartSegmento(data) {
    const ctx3 = document.getElementById('barChartSegmento');

    let segmento_listagem = [];
    let qtde = [];

    for (let i = 0; i < data.length; i++) {
        segmento_listagem[i] = data[i]['segimento_de_listagem'];
        qtde[i] = data[i]['qtde'];
    }
    new Chart(ctx3, {
        type: 'bar',
        data: {
            labels: segmento_listagem,
            datasets: [{
                label: 'Companhia por setor de atividade',
                data: qtde,
                borderWidth: 1,
                backgroundColor: [
                    'rgba(255, 99, 132,0.7)',
                    'rgba(255, 159, 64,0.7)',
                    'rgba(255, 205, 86,0.7)',
                    'rgba(75, 192, 192,0.7)',
                    'rgba(54, 162, 235,0.7)',
                  ],
            }]
        },
        options: {
            /* indexAxis: 'y', */
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
    fetch('/setor-atividade').then((data) => data.json()).then((data) => barChart(data));
    fetch('/controle-acionario').then((data) => data.json()).then((data) => pieChart(data));
    fetch('/segmento-listagem').then((data) => data.json()).then((data) => barChartSegmento(data));

});
