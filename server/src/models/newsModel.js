const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

module.exports = {
  createNews: async ({
    titulo,
    autor_id,
    cidade,
    images_news,
    paragraph_news,
  }) => {
    try {
      const newNews = await prisma.news.create({
        data: {
          titulo,
          autor_id,
          cidade,
          images_news: {
            createMany: {
              data: images_news,
            },
          },
          paragraph_news: {
            createMany: {
              data: paragraph_news,
            },
          },
        },
        include: {
          images_news: true,
          paragraph_news: true,
        },
      });
      return newNews;
    } catch (error) {
      throw new Error("Erro ao cadastrar notícia: " + error.message);
    }
  },

  deleteNews: async (id) => {
    try {
      await prisma.news.delete({
        where: {
          id: parseInt(id),
        },
      });
      return true;
    } catch (error) {
      throw new Error("Erro ao deletar notícia: " + error.message);
    }
  },

  getAllNews: async () => {
    try {
      const news = await prisma.news.findMany({
        include: {
          images_news: true,
          paragraph_news: true,
          users: true,
        },
      });
      return news;
    } catch (error) {
      throw new Error("Erro ao buscar notícias: " + error.message);
    }
  },

  getNewsById: async (id) => {
    try {
      const news = await prisma.news.findUnique({
        where: {
          id: parseInt(id),
        },
        include: {
          images_news: true,
          paragraph_news: true,
          users: true,
        },
      });
      return news;
    } catch (error) {
      throw new Error("Erro ao buscar notícia por ID: " + error.message);
    }
  },

  getNewsByCategory: async (categoriaId) => {
    try {
      const news = await prisma.news.findMany({
        where: {
          categorias_news: {
            some: {
              id: parseInt(categoriaId),
            },
          },
        },
        include: {
          images_news: true,
          paragraph_news: true,
          users: true,
        },
      });
      return news;
    } catch (error) {
      throw new Error(
        "Erro ao buscar notícias por categoria: " + error.message
      );
    }
  },

  getNewsByCity: async (cidade) => {
    try {
      const news = await prisma.news.findMany({
        where: {
          cidade: {
            contains: cidade,
            mode: "insensitive",
          },
        },
        include: {
          images_news: true,
          paragraph_news: true,
          users: true,
        },
      });
      return news;
    } catch (error) {
      throw new Error("Erro ao buscar notícias por cidade: " + error.message);
    }
  },
};
