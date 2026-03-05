##logica de Calc Sensibilidade

$(document).ready(function() {
    // Valores base extraídos do seu SEED
    let baseROI = 22.10;
    let baseInsumoTI = 0.20;

    $('#range-ti').on('input', function() {
        const novoValor = parseFloat($(this).val());
        $('#val-ti').text(novoValor.toFixed(2));

        // Cálculo de Sensibilidade: 
        // Quanto menor o coeficiente técnico (maior eficiência), maior o ROI.
        // Fórmula simplificada para feedback visual: Delta ROI = (Base - Novo) * Fator de Impacto
        const delta = (baseInsumoTI - novoValor) * 50; 
        const calculadoROI = baseROI + delta;
        const deltaEmissao = (novoValor - baseInsumoTI) * 100;

        // Atualiza UI
        $('#new-roi').text(calculadoROI.toFixed(2) + '%');
        $('#delta-emissao').text((deltaEmissao > 0 ? '+' : '') + deltaEmissao.toFixed(1) + '%');

        // Mudar cor se for negativo (Risco Climático IFRS S2)
        if (deltaEmissao > 0) {
            $('#delta-emissao').removeClass('text-blue-600').addClass('text-red-600');
        } else {
            $('#delta-emissao').removeClass('text-red-600').addClass('text-emerald-600');
        }
    });

    // Ao aplicar, envia para o backend para processamento pesado em Python
    $('#btn-aplicar-simulacao').click(function() {
        const valorSimulado = parseFloat($('#range-ti').val());
        atualizarGraficosComSimulacao(valorSimulado);
    });
});