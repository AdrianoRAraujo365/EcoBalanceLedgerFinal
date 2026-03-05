const express = require('express');
const { engine } = require('express-handlebars');
const jwt = require('jsonwebtoken');
const { spawn } = require('child_process');
const mysql = require('mysql2/promise');
const twilio = require('twilio');

const app = express();

// Configuração Handlebars (View Engine)
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');

// Middleware de Autenticação JWT
const authenticateJWT = (req, res, next) => {
    const token = req.headers.authorization;
    if (token) {
        jwt.verify(token, 'SECRET_KEY_ECO_LEDGER', (err, user) => {
            if (err) return res.sendStatus(403);
            req.user = user;
            next();
        });
    } else { res.sendStatus(401); }
};

// Rota de Processamento Leontief (Integração Python)
app.post('/api/calculate-equilibrium', authenticateJWT, async (req, res) => {
    const { matriz, demanda } = req.body;
    
    const pythonProcess = spawn('python', ['leontief_calc.py']);
    pythonProcess.stdin.write(JSON.stringify({ matriz, demanda }));
    pythonProcess.stdin.end();

    pythonProcess.stdout.on('data', (data) => {
        const result = JSON.parse(data.toString());
        
        // Notificação Twilio se a produção exceder limite de carbono
        if (result.status === 'success' && result.producao_total[0] > 1000) {
            const client = twilio('ACCOUNT_SID', 'AUTH_TOKEN');
            client.messages.create({
                body: 'Alerta TI Verde: Produção excedeu limite sustentável!',
                from: '+123456789', to: '+551199999999'
            });
        }
        res.json(result);
    });
});

app.listen(3000, () => console.log('EcoBalance Ledger Running on Port 3000'));