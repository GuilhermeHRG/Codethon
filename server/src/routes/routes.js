const express = require('express');
const app = express();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const multer = require('multer');
const fs = require('fs');
const path = require('path');

// Middleware para permitir o parsing de JSON no corpo das requisições
app.use(express.json());

// Configuração para salvar os arquivos na pasta 'uploads'
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, 'uploads'));
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

// Função para deletar arquivos de imagens da pasta de uploads
const deleteUploadedFiles = (images) => {
  images.forEach((image) => {
    const filePath = path.join(__dirname, 'uploads', path.basename(image.url));
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }
  });
};

// Controllers
const userController = require('./controllers/userController');
const newsController = require('./controllers/newsController');

// Rotas para usuários
app.get('/api/users', userController.);

// Rotas para notícias
app.get('/api/news', newsController.getAllNews);
app.get('/api/news/:id', newsController.getNewsById);
app.get('/api/news/category/:categoriaId', newsController.getNewsByCategory);
app.get('/api/news/city/:cidade', newsController.getNewsByCity);
app.post('/api/news/cadastroo', newsController.createNews);
app.delete('/api/news/:id', newsController.deleteNews);

// Configuração para lidar com erros
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Erro interno do servidor');
});

// Iniciar o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
