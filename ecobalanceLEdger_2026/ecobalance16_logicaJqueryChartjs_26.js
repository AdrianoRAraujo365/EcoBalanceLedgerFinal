##logica de comparaçao jquery /chartjs

function realizarComparacaoAnos() {
    // Chamada para 2015
    const p1 = $.get('/api/leontief/2015');
    // Chamada para 2025
    const p2 = $.get('/api/leontief/2025');

    Promise.all([p1, p2]).then(results => {
        const data2015 = results[0].producao_total;
        const data2025 = results[1].producao_total;

        renderizarGrafico('chart2015', data2015, '#94a3b8'); // Cinza (Passado)
        renderizarGrafico('chart2025', data2025, '#10b981'); // Verde (Futuro)
        
        // Calcula o ganho de eficiência para o IFRS S2
        const ganho = calcularGanhoProdutividade(data2015, data2025);
        $('#produtividade-badge').text(`+${ganho}%`);
    });
}

function renderizarGrafico(canvasId, dataset, color) {
    new Chart(document.getElementById(canvasId), {
        type: 'radar', // Usando Radar para comparar a "forma" da economia
        data: {
            labels: ['Auto', 'Aço', 'TI', 'Papel', 'Resíduos'],
            datasets: [{
                label: 'Intensidade de Produção',
                data: dataset,
                backgroundColor: color + '33',
                borderColor: color,
                borderWidth: 2
            }]
        },
        options: { scales: { r: { suggestMin: 0 } } }
    });
}