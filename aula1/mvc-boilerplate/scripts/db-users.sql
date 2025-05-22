CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Inserir alguns dados de exemplo
INSERT INTO users (name, email, created_at)
VALUES 
    ('João Silva', 'joao@gmail.com', NOW()),
    ('Maria Souza', 'maria@gmail.com', NOW()),
    ('Pedro Santos', 'pedro@gmail.com', NOW());
