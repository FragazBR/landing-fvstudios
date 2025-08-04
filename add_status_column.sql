-- Adiciona a coluna status na tabela leads, se não existir
ALTER TABLE leads ADD COLUMN IF NOT EXISTS status text DEFAULT 'novo';

-- Opcional: atualiza todos os leads antigos para status 'novo' se estiverem nulos
UPDATE leads SET status = 'novo' WHERE status IS NULL;
