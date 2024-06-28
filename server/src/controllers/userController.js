const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const bcrypt = require('bcrypt');

// Função para realizar o login de um usuário
const login = async (req, res) => {
  const { email, senha } = req.body;

  try {
    // Verifica se o usuário existe pelo e-mail
    const user = await prisma.users.findUnique({
      where: {
        email: email.toLowerCase(), // Converter o email para minúsculas
      },
    });

    // Se o usuário não existir
    if (!user) {
      return res.status(404).json({ message: 'Usuário não encontrado' });
    }

    // Verifica se a senha fornecida corresponde à senha armazenada (bcrypt)
    const passwordMatch = await bcrypt.compare(senha, user.senha);

    // Se as senhas não coincidirem
    if (!passwordMatch) {
      return res.status(401).json({ message: 'Credenciais inválidas' });
    }

    // Retorna os dados do usuário sem o campo 'senha'
    const { senha: senhaOmitida, ...userData } = user;
    res.json(userData);
  } catch (error) {
    console.error('Erro ao fazer login:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
};

module.exports = {
  login,
};
