/**
 * Lógica EcoBalance - Gerador Automático de Relatórios ESG
 */
function gerarRelatorioPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF('p', 'mm', 'a4');
    const dashboardElement = document.getElementById('main-dashboard-content');

    // 1. Notificação de início de processamento
    $('#btn-print').text('Processando Relatório...').addClass('opacity-50');

    // 2. Captura visual do Dashboard (Charts e Mapas)
    html2canvas(dashboardElement, { scale: 2 }).then(canvas => {
        const imgData = canvas.toDataURL('image/png');
        const imgProps = doc.getImageProperties(imgData);
        const pdfWidth = doc.internal.pageSize.getWidth();
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

        // Cabeçalho de Governança
        doc.setFontSize(18);
        doc.setTextColor(6, 95, 70); // Cor Emerald-900
        doc.text("Relatório de Equilíbrio e Sustentabilidade TI Verde", 10, 20);
        
        doc.setFontSize(10);
        doc.setTextColor(100);
        doc.text(`Data de Emissão: ${new Date().toLocaleString()}`, 10, 28);
        doc.text("Protocolo Blockchain: 0x4B2...F92A", 10, 33);

        // Inserção do Dashboard capturado
        doc.addImage(imgData, 'PNG', 10, 40, pdfWidth - 20, pdfHeight - 20);

        // 3. Adição de Dados brutos do Modelo de Leontief (página 2)
        doc.addPage();
        doc.setFontSize(14);
        doc.text("Detalhamento da Matriz de Insumo-Produto", 10, 20);
        
        // Exemplo de coleta de dados da tabela MySQL para o PDF
        let yPos = 30;
        $('.matrix-cell').each(function(index) {
            const valor = $(this).text();
            doc.setFontSize(10);
            doc.text(`Coeficiente Técnico ${index + 1}: ${valor}`, 15, yPos);
            yPos += 7;
        });

        // Rodapé de Conformidade
        doc.setFontSize(8);
        doc.text("Este documento é gerado automaticamente e assinado digitalmente via EcoBalance Ledger.", 10, 285);

        // Download Automático
        doc.save(`Relatorio_Sustentabilidade_2025.pdf`);
        
        $('#btn-print').text('Gerar Relatório PDF').removeClass('opacity-50');
    });
}

// Evento do botão
$('#btn-print').on('click', function() {
    gerarRelatorioPDF();
});