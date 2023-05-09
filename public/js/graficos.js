function barChart(data) {
    const ctx = document.getElementById('barChart');

    let setor_atividade = [];
    let qtde = [];
    let cor_m = 'rgba(255, 0, 247, 0.54)';
    let cor_h = 'rgba(3, 0, 255, 0.8)';

    for (let i = 0; i < data.length; i++) {
        setor_atividade[i] = data[i]['setor_atividade'];
        qtde[i] = data[i]['qtde'];
    }
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: setor_atividade,
            datasets: [{
                data: qtde,
                borderWidth: 1,
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

$(document).ready(() => {
    fetch('/profissionais-data').then((data) => data.json()).then((data) => lineChart(data));
    fetch('/setor-atividade').then((data) => data.json()).then((data) => barChart(data));
    fetch('/controle-acionario').then((data) => data.json()).then((data) => pieChart(data));
});
