CREATE DATABASE codethon;

USE codethon;

-- Tabela de usuários
CREATE TABLE users (
    id INT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    senha_hash VARCHAR(255) NOT NULL
);

-- Tabela de notícias
CREATE TABLE news (
    id INT PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    cidade VARCHAR(255) NOT NULL,
    autor VARCHAR(255) NOT NULL,
    data_publicacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabela de categorias das notícias
CREATE TABLE categorias (
    id INT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL UNIQUE
);

-- Tabela de parágrafos das notícias
CREATE TABLE paragraph_news (
    id INT PRIMARY KEY,
    news_id INT,
    conteudo TEXT NOT NULL,
    FOREIGN KEY (news_id) REFERENCES news(id) ON DELETE CASCADE
);

-- Tabela de imagens das notícias
CREATE TABLE images_news (
    id INT PRIMARY KEY,
    news_id INT,
    url VARCHAR(255) NOT NULL,
    legenda VARCHAR(255),
    FOREIGN KEY (news_id) REFERENCES news(id) ON DELETE CASCADE
);

-- Tabela de relacionamento entre notícias e categorias
CREATE TABLE categorias_news (
    news_id INT,
    categoria_id INT,
    PRIMARY KEY (news_id, categoria_id),
    FOREIGN KEY (news_id) REFERENCES news(id) ON DELETE CASCADE,
    FOREIGN KEY (categoria_id) REFERENCES categorias(id)
);

-- Tabela de inscrições na newsletter
CREATE TABLE inscricoes_newsletter (
    id INT PRIMARY KEY,
    user_id INT,
    email VARCHAR(255) NOT NULL,
    data_inscricao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

-- Inserção das categorias iniciais
INSERT INTO categorias (id, nome) VALUES
    (1, 'política'),
    (2, 'economia'),
    (3, 'esportes'),
    (4, 'cultura'),
    (5, 'tecnologia'),
    (6, 'saúde'),
    (7, 'educação'),
    (8, 'meio ambiente'),
    (9, 'internacional'),
    (10, 'nacional'),
    (11, 'entretenimento'),
    (12, 'ciência');