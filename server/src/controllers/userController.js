const bcrypt = require('bcryptjs');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function login(req, res, next) {
  const { email, senha } = req.body;

  try {
    // Verificar se o usuário existe
    const usuario = await prisma.users.findUnique({
      where: {
        email: email,
      },
    });

    if (!usuario) {
      return res.status(404).json({ error: 'Usuário não encontrado' });
    }

    // Comparar a senha fornecida com a senha armazenada (hash)
    const senhaCorreta = await bcrypt.compare(senha, usuario.senha_hash);

    if (!senhaCorreta) {
      return res.status(401).json({ error: 'Credenciais inválidas' });
    }

    // Login bem-sucedido
    res.json({
      id: usuario.id,
      nome: usuario.nome,
      email: usuario.email,
    });
  } catch (error) {
    console.error('Erro no login:', error);
    next(error);
  }
}

module.exports = {
  login,
};
