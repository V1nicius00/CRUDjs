const Cliente = require("../models/ClienteModel");

module.exports = {
    async read(req,res){
        const ClienteList = await Cliente.find();
        return res.json(ClienteList);
    },

    async create(req, res){
        const {id, cpf, nome} = req.body;

        if(!id || !cpf || !nome){
            return res.status(400).json({error: "É necessário preencher todos os dados"});
        };

        const clienteCriado = await Cliente.create({
            id,
            cpf,
            nome,
        });
        return res.json(clienteCriado);
    },

    async delete(req, res){
        const { idDelete } = req.params;
        const clienteDeletado = await Cliente.findOneAndDelete({ _id:id });
        if(clienteDeletado){
            return res.json(clienteDeletado);
        }
    },

    async update(req,res){
        const { idUpdate } = req.params;
        const {id, cpf, nome} = req.body;

        const cliente = await Cliente.findOne({ _id:id });
        cliente.id = id;
        cliente.cpf = cpf;
        cliente.nome = nome;

        await cliente.save();

        return res.json(cliente);
    }
}