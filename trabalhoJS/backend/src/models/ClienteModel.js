const mongoose = require("mongoose");

const ClienteModelSchema = new mongoose.Schema({
    id: String,
    cpf: String,
    nome: String
});

module.exports = mongoose.model("Cliente", ClienteModelSchema);