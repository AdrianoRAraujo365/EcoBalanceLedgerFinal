##Calculadora de Sensibilidade

<div class="card shadow-lg mt-6 border-t-4 border-yellow-500">
    <div class="card-header bg-white p-4">
        <h3 class="text-xl font-bold text-gray-800"><i class="fas fa-microchip mr-2"></i>Calculadora de Sensibilidade (Impacto Marginal)</h3>
        <p class="text-sm text-gray-500">Ajuste os insumos para simular mudanças na eficiência tecnológica.</p>
    </div>
    <div class="card-body p-6">
        <div class="row">
            <div class="col-md-4 border-r">
                <label class="block text-sm font-medium text-gray-700">Eficiência em Eletrónicos (TI Verde)</label>
                <input type="range" id="range-ti" min="0.01" max="0.5" step="0.01" value="0.20" class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-yellow-500">
                <div class="flex justify-between text-xs mt-2">
                    <span>Mais Eficiente</span>
                    <span id="val-ti" class="font-bold">0.20</span>
                    <span>Menos Eficiente</span>
                </div>
            </div>

            <div class="col-md-8 flex justify-around items-center">
                <div class="text-center">
                    <span class="block text-gray-500 text-xs uppercase">Novo ROI Estimado</span>
                    <span id="new-roi" class="text-3xl font-bold text-emerald-600">22.10%</span>
                </div>
                <div class="text-center">
                    <span class="block text-gray-500 text-xs uppercase">Variação na Emissão</span>
                    <span id="delta-emissao" class="text-3xl font-bold text-blue-600">0.00%</span>
                </div>
                <button id="btn-aplicar-simulacao" class="btn btn-warning font-bold px-4 py-2 rounded-full">Aplicar no Modelo</button>
            </div>
        </div>
    </div>
</div>