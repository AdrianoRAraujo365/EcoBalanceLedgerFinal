##Relatorio integraçao LiveGAP

function capturarSimulacaoNoPDF(doc) {
    const valorSimulado = $('#val-ti').text();
    const roiSimulado = $('#new-roi').text();

    doc.setFillColor(255, 243, 205); // Fundo amarelo claro para destacar simulação
    doc.rect(10, 200, 190, 20, 'F');
    
    doc.setFontSize(10);
    doc.setTextColor(133, 100, 4);
    doc.text(`CENÁRIO SIMULADO: Eficiência de Insumo TI ajustada para ${valorSimulado}`, 15, 208);
    doc.text(`Projeção de impacto no ROI: ${roiSimulado}`, 15, 215);
    
    // Adiciona nota de rodapé IFRS S2
    doc.setFontSize(8);
    doc.text("*Este dado faz parte da Análise de Sensibilidade exigida pela norma IFRS S2.", 15, 225);
}