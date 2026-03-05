# EcoBalance Ledger: Inteligência de Insumo-Produto para TI Verde

![Status](https://img.shields.io/badge/Status-Pronto%20para%20Produção-emerald)
![Docker](https://img.shields.io/badge/Docker-Compatible-blue)
![ESG](https://img.shields.io/badge/Compliance-GRI%20|%20IFRS%20S2-brightgreen)

## 🌿 Visão Geral
O **EcoBalance Ledger** é um Sistema de Suporte à Decisão (SSD) que utiliza o **Modelo de Leontief** para otimizar o equilíbrio entre produção industrial e sustentabilidade ambiental. Focado no mercado de capitais (B3), o sistema monitora indicadores socioambientais de 2015 a 2025.

---

## 🚀 Diferenciais Técnicos (Destaque para Investidores)

### 1. Núcleo de Engenharia Econômica (Python + NumPy)
Diferente de planilhas comuns, nossa engine utiliza a **Inversa de Leontief** para calcular a produção total necessária ($x = (I - C)^{-1}d$).
* **Calculadora de Sensibilidade:** Permite simulações marginalistas de ROI.
* **Unit Tests:** Validação matemática para garantir sistemas produtivos não-negativos.

### 2. Governança Digital e Blockchain
Cada transação de ativo verde (créditos de carbono, e-waste) é registrada com um Hash imutável no MySQL, simulando um ledger de auditoria que atende aos requisitos de transparência do **ISE B3**.

### 3. Reporting Automatizado (LiveGAP/jsPDF)
Geração de relatórios PDF com um clique, incluindo:
* Mapeamento de indicadores **GRI 302, 305 e 306**.
* Análise de resiliência climática conforme **IFRS S2**.
* Comparação decenal (2015 vs 2025) via Decomposição Estrutural.

### 4. Arquitetura de Microserviços (Docker)
Sistema totalmente conteinerizado, garantindo portabilidade entre provedores de nuvem (AWS/Azure) e facilidade de deploy.

---

## 🛠️ Stack Tecnológica
* **Back-end:** Node.js (Express), Python (NumPy/Unittest).
* **Front-end:** jQuery, Tailwind CSS, Chart.js, Leaflet.js.
* **Banco de Dados:** MySQL 8.0 com suporte a versionamento de ativos.
* **Comunicação:** Twilio API para alertas críticos de metas ESG.
* **DevOps:** Docker & Docker Compose.

---

## 📂 Como Executar o Sistema
1. Certifique-se de ter o Docker instalado.
2. Clone o repositório e configure as chaves no arquivo `.env`.
3. Execute o comando:
   ```bash
   docker-compose up --build -d