##estrutura de dados

-- Adicionando dados de 2015 para comparação (Exemplo de maior consumo/menor eficiência)
INSERT INTO insumos (id_setor_origem, id_setor_destino, coeficiente_tecnico, ano_referencia) VALUES
(3, 3, 0.3500, 2015), -- Eletrônicos em 2015 era menos eficiente (0.35) que em 2025 (0.20)
(2, 1, 0.5500, 2015); -- Automobilístico consumia mais aço em 2015