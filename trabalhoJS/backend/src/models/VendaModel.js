const mongoose = require("mongoose");

const VendaModelSchema = new mongoose.Schema({
    idCliente: Number,
    data: String,
    produto: String
});

module.exports = mongoose.model("Venda", VendaModelSchema);