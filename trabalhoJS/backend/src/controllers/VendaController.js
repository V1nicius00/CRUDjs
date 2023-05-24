const Venda = require("../models/VendaModel");
const Cliente = require("../models/ClienteModel");

module.exports = {

    async read(req, res){
        const VendaList = await Venda.find();
        return res.json(VendaList);
    },

    async create(req, res){
        const {idVenda, data, produto} = req.body;

        if(!idVenda || !data || !produto){
            return res.status(400).json({error: "É necessário preencher todos os dados"});
        };

        try {

            const vendaCriada = await Venda.create({
                idVenda,
                data,
                produto
            });

            return res.json(vendaCriada);

        } catch (error) {
            console.log("Erro ao realizar venda: ", error)
        }
    },

    async delete(req, res){
        
        try {

            const { idDelete } = req.params;
            const vendaDeletada = await Venda.findOneAndDelete({ _id:idDelete });

            if (!vendaDeletada) {
                return res.status(400).json({ message: 'Venda não encontrada' });
              }

            if(vendaDeletada){
                return res.json(vendaDeletada);
            }

        } catch (error) {
            console.log("Erro ao deletar venda: ", error);
        }

    },

    async update(req,res){
        const { idUpdate } = req.params;
        const {idVenda, data, produto} = req.body;

        try {

            const venda = await Venda.findOne({ _id:idUpdate });

            if (!venda) {
                return res.status(400).json({ message: 'Venda não encontrada' });
              }

            venda.idVenda = idVenda;
            venda.data = data;
            venda.produto = produto;

            await venda.save();

            return res.json(venda);

        } catch (error) {
            console.log("Erro ao atualizar dados de venda: ", error);
        }
    }
}