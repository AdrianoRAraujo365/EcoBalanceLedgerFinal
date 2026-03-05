// No backend/server.js
pythonProcess.stdout.on('data', (data) => {
    const result = JSON.parse(data.toString());
    
    // Validação de Segurança antes de enviar ao Dashboard
    const hasNegative = result.producao_total.some(val => val < 0);
    
    if (hasNegative) {
        console.error("ALERTA: Cálculo de Leontief retornou valores negativos. Bloqueando relatório.");
        return res.status(422).json({ 
            error: "Sistema Instável: O consumo de insumos excede a capacidade produtiva." 
        });
    }

    res.json(result); // Se passar, envia para o Chart.js e PDF
});