const mongoose = require("mongoose");

const ClienteModelSchema = new mongoose.Schema({
    idCliente: Number,
    cpf: Number,
    nome: String,
});

module.exports = mongoose.model("Cliente", ClienteModelSchema);