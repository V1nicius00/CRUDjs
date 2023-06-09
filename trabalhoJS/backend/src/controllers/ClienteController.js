const Cliente = require("../models/ClienteModel");
const Venda = require("../models/VendaModel")

module.exports = {
    async read(req,res){
        const clienteList = await Cliente.find();
        return res.json(clienteList);
    },

    async create(req, res){
        const {idCliente, cpf, nome} = req.body;

        if(!idCliente || !cpf || !nome){
            return res.status(400).json({error: "É necessário preencher todos os dados"});
        };

        try {
            const clienteCriado = await Cliente.create({
                idCliente,
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
            const clienteDeletado = await Cliente.findOneAndDelete({ idCliente:idDelete });

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
        const {idCliente, cpf, nome} = req.body;

        try {
            const cliente = await Cliente.findOne({ idCliente:idUpdate });
            if (!cliente) {
                return res.status(404).json({ message: 'Cliente não encontrado' });
            }

            cliente.idCliente = idCliente;
            cliente.cpf = cpf;
            cliente.nome = nome;

            await cliente.save();

            return res.json(cliente);
        } catch (error) {
            console.log("Erro ao atualizar dados de cliente: ", error)
        }
    },

    async summary(req, res){
        try {
            
            const lookup = [
                {

                $lookup: {
                    from: "vendas",
                    localField: "idCliente",
                    foreignField: "idVenda",
                    as: "VendasCliente",
                },

            }
        ]

        const summary = await Cliente.aggregate(lookup);

        res.json(summary);

        } catch (error) {
            
            console.log("Erro ao mostrar resumo de vendas: " , error);

        }
    },

    async findOne(req,res){
        const {idBuscar} = req.params;
        const cliente = await Cliente.findOne({idCliente: idBuscar});
        return res.json(cliente); 
    }
}