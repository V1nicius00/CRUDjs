const Cliente = require("../models/ClienteModel");

module.exports = {
    async read(req,res){
        const clienteList = await Cliente.find();
        return res.json(clienteList);
    },

    async create(req, res){
        const {id, cpf, nome} = req.body;

        if(!id || !cpf || !nome){
            return res.status(400).json({error: "É necessário preencher todos os dados"});
        };

        try {
            const clienteCriado = await Cliente.create({
                id,
                cpf,
                nome,
            });

            return res.json(clienteCriado);
            
        } catch (error) {
            console.log("Erro ao criar cliente: ", error);
        }
    },

    async delete(req, res){
        try {
            const { idDelete } = req.params;
            const clienteDeletado = await Cliente.findOneAndDelete({ _id:idDelete });

            if (!clienteDeletado) {
                return res.status(404).json({ message: 'Cliente não encontrado' });
              }
        
            if(clienteDeletado){
                return res.json(clienteDeletado);
            }
        } catch (error) {
            console.log("Erro ao deletar cliente: ", error)
        }
    },

    async update(req,res){
        const { idUpdate } = req.params;
        const {id, cpf, nome} = req.body;

        try {
            const cliente = await Cliente.findOne({ _id:idUpdate });
            if (!cliente) {
                return res.status(404).json({ message: 'Cliente não encontrado' });
              }
            cliente.id = id;
            cliente.cpf = cpf;
            cliente.nome = nome;

            await cliente.save();

            return res.json(cliente);
        } catch (error) {
            console.log("Erro ao atualizar dados de cliente: ", error)
        }
    }
}