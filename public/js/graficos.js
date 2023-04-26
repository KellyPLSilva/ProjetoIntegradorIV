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
});
