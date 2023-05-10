const mongoose = require("mongoose");
const dbConfig = "mongodb://0.0.0.0:27017/trabalhoJS";

try {

    const conexao = mongoose.connect(dbConfig, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    module.exports = conexao;

    console.log("Conexão feita com sucesso!");

} catch (error) {
    console.log("Erro ao se conectar com o banco de dados: ", error);
}

