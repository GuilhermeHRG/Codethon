require('dotenv').config();
const express = require('express');
const routes = require('routes');

const app = express();
const port = process.env.PORT || 5000;

app.use('/api', routes);

app.listen(port, () => {
  console.log(`Servidor iniciado em http://localhost:${port}`);
});
