##Decomposiçao de estrutural

function adicionarPaginaComparativa(doc) {
    doc.addPage();
    doc.setFontSize(16);
    doc.setTextColor(31, 41, 55);
    doc.text("Análise de Decomposição Estrutural (2015-2025)", 10, 20);
    
    doc.setFontSize(10);
    doc.text("Conforme o método de Rangel & Campanario, a comparação abaixo demonstra", 10, 30);
    doc.text("a evolução da eficiência tecnológica por setor.", 10, 35);

    // Inserção dos dados tabulares comparativos
    const head = [['Setor', 'Impacto 2015', 'Impacto 2025', 'Variação (%)']];
    const body = [
        ['Eletrônicos/TI', '0.35', '0.20', '-42.8%'],
        ['Automobilístico', '0.55', '0.40', '-27.2%']
    ];

    doc.autoTable({
        startY: 45,
        head: head,
        body: body,
        theme: 'striped',
        headStyles: { fillColor: [6, 95, 70] }
    });

    doc.text("Evidência: A redução nos coeficientes técnicos confirma a transição para uma economia de baixo carbono.", 10, doc.lastAutoTable.finalY + 10);
}