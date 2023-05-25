const mongoose = require("mongoose");

const VendaModelSchema = new mongoose.Schema({
    idVenda: Number,
    data: Date,
    produto: String
});

module.exports = mongoose.model("Venda", VendaModelSchema);