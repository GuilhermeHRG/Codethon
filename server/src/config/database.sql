CREATE DATABASE codethon;

USE codethon;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) NOT NULL,
    senha VARCHAR(255) NOT NULL
);

CREATE TABLE news (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    autor_id INT,
    cidade VARCHAR(255),
    data_publicacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (autor_id) REFERENCES users(id)
);

CREATE TABLE paragraph_news (
    id INT AUTO_INCREMENT PRIMARY KEY,
    news_id INT,
    conteudo TEXT NOT NULL,
    FOREIGN KEY (news_id) REFERENCES news(id)
);

CREATE TABLE images_news (
    id INT AUTO_INCREMENT PRIMARY KEY,
    news_id INT,
    url VARCHAR(255) NOT NULL,
    legenda VARCHAR(255),
    FOREIGN KEY (news_id) REFERENCES news(id)
);

CREATE TABLE categorias_news (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL UNIQUE
);

CREATE TABLE inscricoes_newsletter (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    email VARCHAR(255) NOT NULL,
    data_inscricao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id)
);