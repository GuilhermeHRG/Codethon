const express = require("express");
const app = express();
const newsRoutes = require("./routes/routes");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");

// Carregar variáveis de ambiente do arquivo .env
dotenv.config();

// Middlewares
app.use(bodyParser.json());

// Rotas
app.use("/api", newsRoutes);

// Iniciando o servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
