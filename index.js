require('dotenv').config();
const express = require('express');

const PORT = process.env.PORT || 3000;
const app = express();

app.get(
  '/',
  (_req, res) => res
    .send(`<h1>Sou um container docker rodando na porta ${PORT}</h1>`),
);

// eslint-disable-next-line no-console
app.listen(PORT, () => console.log(`I am online here ${PORT}`));
