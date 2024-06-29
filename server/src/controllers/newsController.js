const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const { criptografarId, descriptografarId } = require("../utils/cryptoUtils");
const multer = require("multer");
const fs = require("fs");
const path = require("path"); // Importe o módulo 'path' para manipulação de caminhos

// Configuração do Multer para salvar imagens no disco
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const dir = './uploads/';
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    cb(null, dir);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage: storage }).array('imagens', 10); // Configuração para receber até 10 imagens

// Função para cadastrar uma notícia com parágrafos, imagens e categorias
async function cadastrarNoticia(titulo, cidade, autor, conteudoParagrafos, imagens, categorias) {
  let transaction;
  try {
    // Realiza o upload das imagens
    const imagensSalvas = await Promise.all(imagens.map(async (imagem) => {
      const resultadoUpload = await new Promise((resolve, reject) => {
        upload(req, res, (err) => {
          if (err) reject(err);
          resolve(req.files); // Resolve com o array de arquivos enviados
        });
      });
      return { path: resultadoUpload[0].path, originalname: resultadoUpload[0].originalname };
    }));

    // Inicia a transação no Prisma
    transaction = await prisma.$transaction([
      prisma.news.create({
        data: {
          titulo,
          cidade,
          autor,
          paragraphs: {
            createMany: {
              data: conteudoParagrafos.map(conteudo => ({ conteudo }))
            }
          },
          images: {
            createMany: {
              data: imagensSalvas.map(imagem => ({ url: imagem.path, legenda: imagem.originalname }))
            }
          },
          categorias_news: {
            createMany: {
              data: categorias.map(categoriaId => ({ categoria_id: categoriaId }))
            }
          }
        }
      })
    ]);

    return transaction[0]; // Retorna a notícia criada
  } catch (error) {
    console.error('Erro ao cadastrar notícia:', error);
    throw error;
  }
}

// Função para deletar notícias por IDs criptografados
async function deletarNoticias(ids) {
  const noticiasIds = ids.map(id => descriptografarId(id));

  try {
    const noticias = await prisma.news.findMany({
      where: {
        id: {
          in: noticiasIds,
        },
      },
      include: {
        images: true,
      },
    });

    // Deletar imagens associadas às notícias
    const imagensPaths = noticias.flatMap(noticia => noticia.images.map(imagem => imagem.url));
    await Promise.all(imagensPaths.map(async (imagemPath) => {
      const fullPath = path.join(__dirname, "../", imagemPath);
      if (fs.existsSync(fullPath)) {
        await fs.unlinkSync(fullPath);
      }
    }));

    // Deletar notícias
    await prisma.news.deleteMany({
      where: {
        id: {
          in: noticiasIds,
        },
      },
    });

    return true; // Retorna true se a operação foi bem-sucedida
  } catch (error) {
    console.error('Erro ao deletar notícias:', error);
    throw error;
  }
}

// Funções para buscar notícias
async function buscarTodasNoticias() {
  const noticias = await prisma.news.findMany();
  return noticias.map((noticia) => ({
    id: criptografarId(noticia.id),
    titulo: noticia.titulo,
    cidade: noticia.cidade,
    autor: noticia.autor,
    data_publicacao: noticia.data_publicacao,
    paragrafos: noticia.paragraphs.map((paragrafo) => ({
      id: criptografarId(paragrafo.id),
      conteudo: paragrafo.conteudo,
    })),
    imagens: noticia.images.map((imagem) => ({
      id: criptografarId(imagem.id),
      url: imagem.url,
      legenda: imagem.legenda,
    })),
    categorias: noticia.categorias_news.map((categoria) => ({
      id: criptografarId(categoria.categoriaId),
      nome: categoria.categoria.nome,
    })),
  }));
}

async function buscarNoticiasPorCidade(cidade) {
  const noticias = await prisma.news.findMany({
    where: {
      cidade: cidade,
    },
  });
  return noticias.map((noticia) => ({
    id: criptografarId(noticia.id),
    titulo: noticia.titulo,
    cidade: noticia.cidade,
    autor: noticia.autor,
    data_publicacao: noticia.data_publicacao,
    paragrafos: noticia.paragraphs.map((paragrafo) => ({
      id: criptografarId(paragrafo.id),
      conteudo: paragrafo.conteudo,
    })),
    imagens: noticia.images.map((imagem) => ({
      id: criptografarId(imagem.id),
      url: imagem.url,
      legenda: imagem.legenda,
    })),
    categorias: noticia.categorias_news.map((categoria) => ({
      id: criptografarId(categoria.categoriaId),
      nome: categoria.categoria.nome,
    })),
  }));
}

async function buscarNoticiaPorId(id) {
  const noticia = await prisma.news.findUnique({
    where: {
      id: descriptografarId(id),
    },
  });
  if (!noticia) return null;

  return {
    id: criptografarId(noticia.id),
    titulo: noticia.titulo,
    cidade: noticia.cidade,
    autor: noticia.autor,
    data_publicacao: noticia.data_publicacao,
    paragrafos: noticia.paragraphs.map((paragrafo) => ({
      id: criptografarId(paragrafo.id),
      conteudo: paragrafo.conteudo,
    })),
    imagens: noticia.images.map((imagem) => ({
      id: criptografarId(imagem.id),
      url: imagem.url,
      legenda: imagem.legenda,
    })),
    categorias: noticia.categorias_news.map((categoria) => ({
      id: criptografarId(categoria.categoriaId),
      nome: categoria.categoria.nome,
    })),
  };
}

async function buscarNoticiasPorCategoria(categoriaId) {
  const categoria = await prisma.categorias_news.findMany({
    where: {
      categoriaId: descriptografarId(categoriaId),
    },
    include: {
      news: true,
    },
  });
  if (!categoria) return [];

  return categoria.news.map((noticia) => ({
    id: criptografarId(noticia.id),
    titulo: noticia.titulo,
    cidade: noticia.cidade,
    autor: noticia.autor,
    data_publicacao: noticia.data_publicacao,
    paragrafos: noticia.paragraphs.map((paragrafo) => ({
      id: criptografarId(paragrafo.id),
      conteudo: paragrafo.conteudo,
    })),
    imagens: noticia.images.map((imagem) => ({
      id: criptografarId(imagem.id),
      url: imagem.url,
      legenda: imagem.legenda,
    })),
    categorias: noticia.categorias_news.map((categoria) => ({
      id: criptografarId(categoria.categoriaId),
      nome: categoria.categoria.nome,
    })),
  }));
}

module.exports = {
  cadastrarNoticia,
  deletarNoticias,
  buscarTodasNoticias,
  buscarNoticiasPorCidade,
  buscarNoticiaPorId,
  buscarNoticiasPorCategoria,
};
