app.post('/api/log-report', authenticateJWT, async (req, res) => {
    const { reportName, userId } = req.body;
    
    // Registra no banco que um relatório de apoio à decisão foi gerado
    const query = "INSERT INTO logs_auditoria (usuario_id, acao, detalhe) VALUES (?, 'PDF_GEN', ?)";
    await db.execute(query, [userId, `Gerado: ${reportName}`]);
    
    res.json({ status: "logged" });
});