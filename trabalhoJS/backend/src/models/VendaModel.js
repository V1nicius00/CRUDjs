const mongoose = require("mongoose");

const VendaModelSchema = new mongoose.Schema({
    idCliente: {type: Number, ref: 'Cliente'},
    data: String,
    produto: String
});

module.exports = mongoose.model("Venda", VendaModelSchema);