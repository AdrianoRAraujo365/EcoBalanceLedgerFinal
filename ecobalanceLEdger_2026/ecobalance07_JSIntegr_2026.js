$(document).ready(function() {
    // 1. Configurações Iniciais da API
    const API_BASE_URL = "http://localhost:3000/api";
    const AUTH_TOKEN = localStorage.getItem('jwt_token'); // Recupera o token gerado no login

    // Função para buscar e atualizar o Equilíbrio de Leontief
    function updateLeontiefData() {
        $.ajax({
            url: `${API_BASE_URL}/calculate-equilibrium`,
            method: "POST",
            contentType: "application/json",
            headers: { "Authorization": `Bearer ${AUTH_TOKEN}` },
            data: JSON.stringify({
                // Dados baseados no SEED (Automobilístico, Aço, Eletrônicos, Papel)
                matriz: [
                    [0.15, 0.40, 0.10, 0.05],
                    [0.10, 0.20, 0.25, 0.10],
                    [0.05, 0.15, 0.20, 0.05],
                    [0.02, 0.05, 0.10, 0.30]
                ],
                demanda: [2000000, 1000000, 500000, 300000]
            }),
            success: function(response) {
                if(response.status === 'success') {
                    renderCharts(response.producao_total);
                    console.log("Equilíbrio de Leontief calculado com sucesso.");
                }
            },
            error: function(err) {
                console.error("Erro na API de Cálculo:", err);
            }
        });
    }

    // 2. Fetch para as Transações de Blockchain (Governança Verde)
    function fetchBlockchainTransactions() {
        $.ajax({
            url: `${API_BASE_URL}/blockchain/transactions`,
            method: "GET",
            headers: { "Authorization": `Bearer ${AUTH_TOKEN}` },
            success: function(data) {
                const tableBody = $('#blockchain-table-body');
                tableBody.empty();

                data.forEach(tx => {
                    tableBody.append(`
                        <tr class="hover:bg-gray-50">
                            <td class="p-2 border font-mono text-xs text-blue-600">${tx.hash_transacao.substring(0,10)}...</td>
                            <td class="p-2 border">${tx.tipo_ativo}</td>
                            <td class="p-2 border font-bold text-emerald-600">${tx.quantidade} kg</td>
                            <td class="p-2 border text-center">
                                ${tx.status_verificacao ? '✅ Validado' : '⏳ Pendente'}
                            </td>
                        </tr>
                    `);
                });
            }
        });
    }

    // 3. Renderização Dinâmica do Gráfico com Chart.js
    function renderCharts(producaoData) {
        const ctx = document.getElementById('leontiefChart').getContext('2d');
        
        // Destruir gráfico anterior se existir para evitar bugs de hover
        if (window.myChart) window.myChart.destroy();

        window.myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Automobilístico', 'Aço', 'Eletrônicos', 'Papel/Celulose'],
                datasets: [{
                    label: 'Produção Total Necessária (X) - Equilíbrio Leontief',
                    data: producaoData,
                    backgroundColor: ['#065f46', '#047857', '#10b981', '#34d399'],
                    borderRadius: 8
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    title: { display: true, text: 'Otimização de Insumo-Produto (TI Verde)' }
                }
            }
        });
    }

    // Inicialização
    updateLeontiefData();
    fetchBlockchainTransactions();

    // Notificação via Twilio (Simulação via Front-end para testes)
    $('#btn-alert-carbono').click(function() {
        $.post(`${API_BASE_URL}/notify`, { message: "Alerta: Limite de Carbono atingido no setor de Aço!" });
    });
});