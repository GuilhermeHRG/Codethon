const express = require('express');
const router = express.Router();
const newsController = require('../controllers/newsController');

// Rota para criar uma nova notícia
router.post('/news', newsController.cadastrarNoticia);

// Rota para deletar uma notícia por ID criptografado
router.delete('/news/:id', newsController.deletarNoticias);

// Rota para obter todas as notícias
router.get('/news', newsController.buscarTodasNoticias);

// Rota para obter uma notícia por ID criptografado
router.get('/news/:id', newsController.buscarNoticiaPorId);

// Rota para obter notícias por categoria
router.get('/news/category/:categoriaId', newsController.buscarNoticiasPorCategoria);

// Rota para obter notícias por cidade
router.get('/news/city/:cidade', newsController.buscarNoticiasPorCidade);

module.exports = router;
