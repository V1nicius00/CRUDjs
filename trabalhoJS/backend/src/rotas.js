const express = require("express");
const rotas = express.Router();

const VendaController = require("./controllers/VendaController");
const ClienteController = require("./controllers/ClienteController");

rotas.get("/", (req, res) => {
     res.send("Home"); 
    } 
);

rotas.get("/venda", VendaController.read);
rotas.post("/venda", VendaController.create);
rotas.delete("/venda/:idDelete", VendaController.delete);
rotas.post("/venda/:idUpdate", VendaController.update);

rotas.get("/summary", ClienteController.join);

rotas.get("/cliente", ClienteController.read);
rotas.post("/cliente", ClienteController.create);
rotas.delete("/cliente/:idDelete", ClienteController.delete);
rotas.post("/cliente/:idUpdate", ClienteController.update);

module.exports = rotas;