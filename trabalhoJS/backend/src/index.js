const express = require("express");
const app = express();
const rotas = require("./rotas");
const cors = require('cors');
app.use(cors({ origin: 'http://127.0.0.1:5500' }));

require("./config/dbConfig");

app.use(express.json());
// Aplicar as configurações do CORS a todas as rotas
app.use(rotas);


app.listen(8081);
