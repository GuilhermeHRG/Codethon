const fs = require("fs");
const path = require("path");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const multer = require("multer");

// Configuração para salvar os arquivos na pasta 'uploads'
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "..", "uploads"));
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  },
});

// Filtrar arquivos de imagem
const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image/")) {
    cb(null, true);
  } else {
    cb(new Error("Apenas arquivos de imagem são permitidos"), false);
  }
};

const upload = multer({ storage: storage, fileFilter: fileFilter });

// Função para deletar arquivos de imagens da pasta de uploads
const deleteUploadedFiles = (images) => {
  images.forEach((image) => {
    const filePath = path.join(__dirname, "..", "uploads", path.basename(image.url));
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }
  });
};

module.exports = {
  createNews: async (req, res) => {
    upload.array("images", 5)(req, res, async (err) => {
      if (err instanceof multer.MulterError) {
        return res.status(400).json({
          error: "Erro ao fazer upload do arquivo",
          details: err.message,
        });
      } else if (err) {
        return res
          .status(500)
          .json({ error: "Erro interno do servidor", details: err.message });
      }

      const { titulo, autor_id, cidade, paragraph_news, categorias } = req.body;

      // Validar os campos recebidos antes de prosseguir
      if (!titulo || !autor_id || !cidade || !paragraph_news || !categorias) {
        return res.status(400).json({
          error: "Campos obrigatórios não fornecidos",
        });
      }

      const images_news = req.files.map((file) => {
        return { url: file.path };
      });

      try {
        const newNews = await prisma.news.create({
          data: {
            titulo,
            autor_id,
            cidade,
            paragraph_news: {
              createMany: {
                data: paragraph_news.map((text) => ({ text })),
              },
            },
            categorias_news: {
              createMany: {
                data: categorias.map((categoriaId) => ({
                  categoria: { connect: { id: parseInt(categoriaId) } },
                })),
              },
            },
            images_news: {
              createMany: {
                data: images_news,
              },
            },
          },
          include: {
            images_news: true,
            paragraph_news: true,
          },
        });

        res.json(newNews);
      } catch (error) {
        console.error("Erro ao cadastrar notícia:", error);
        res.status(500).json({ error: "Erro interno do servidor" });
      }
    });
  },

  deleteNews: async (req, res) => {
    const { ids } = req.body;
    try {
      const newsIds = ids.map((id) => parseInt(id));

      const news = await prisma.news.findMany({
        where: { id: { in: newsIds } },
        include: { images_news: true },
      });

      if (news.length === 0) {
        return res.status(404).json({
          message: `Nenhuma notícia encontrada para os IDs fornecidos`,
        });
      }

      deleteUploadedFiles(news.flatMap((item) => item.images_news));

      await prisma.news.deleteMany({ where: { id: { in: newsIds } } });

      res.json({
        message: `Notícias com IDs ${newsIds.join(", ")} deletadas com sucesso`,
      });
    } catch (error) {
      console.error(`Erro ao deletar notícias:`, error);
      res.status(500).json({ error: "Erro interno do servidor" });
    }
  },

  getAllNews: async (req, res) => {
    try {
      const news = await prisma.news.findMany({
        include: {
          paragraph_news: true,
          categorias_news: { include: { categoria: true } },
          images_news: true,
          users: true,
        },
      });

      res.json(news);
    } catch (error) {
      console.error("Erro ao buscar notícias:", error);
      res.status(500).json({ error: "Erro interno do servidor" });
    }
  },

  getNewsById: async (req, res) => {
    const { id } = req.params;
    try {
      const news = await prisma.news.findUnique({
        where: { id: parseInt(id) },
        include: {
          paragraph_news: true,
          categorias_news: { include: { categoria: true } },
          images_news: true,
          users: true,
        },
      });

      if (!news) {
        return res.status(404).json({ message: `Notícia com ID ${id} não encontrada` });
      }

      res.json(news);
    } catch (error) {
      console.error(`Erro ao buscar notícia com ID ${id}:`, error);
      res.status(500).json({ error: "Erro interno do servidor" });
    }
  },

  getNewsByCategory: async (req, res) => {
    const { categoriaId } = req.params;
    try {
      const news = await prisma.news.findMany({
        where: {
          categorias_news: {
            some: { id: parseInt(categoriaId) },
          },
        },
        include: {
          paragraph_news: true,
          categorias_news: { include: { categoria: true } },
          images_news: true,
          users: true,
        },
      });

      res.json(news);
    } catch (error) {
      console.error(`Erro ao buscar notícias por categoria ${categoriaId}:`, error);
      res.status(500).json({ error: "Erro interno do servidor" });
    }
  },

  getNewsByCity: async (req, res) => {
    const { cidade } = req.params;
    try {
      const news = await prisma.news.findMany({
        where: {
          cidade: { contains: cidade, mode: "insensitive" },
        },
        include: {
          paragraph_news: true,
          categorias_news: { include: { categoria: true } },
          images_news: true,
          users: true,
        },
      });

      res.json(news);
    } catch (error) {
      console.error(`Erro ao buscar notícias por cidade ${cidade}:`, error);
      res.status(500).json({ error: "Erro interno do servidor" });
    }
  },
};
