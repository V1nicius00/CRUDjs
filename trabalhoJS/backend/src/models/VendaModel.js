const mongoose = require("mongoose");

const VendaModelSchema = new mongoose.Schema({
    id: String,
    data: Date,
    produto: String,
});

module.exports = mongoose.model("Venda", VendaModelSchema);