const Venda = require("../models/VendaModel");

module.exports = {
    async read(req,res){
        const VendaList = await Venda.find();
        return res.json(VendaList);
    },

    async create(req, res){
        const {id, data, produto} = req.body;

        if(!id || !data || !produto){
            return res.status(400).json({error: "É necessário preencher todos os dados"});
        };

        const vendaCriada = await Venda.create({
            id,
            data,
            produto
        });
        return res.json(vendaCriada);
    },

    async delete(req, res){
        const { idDelete } = req.params;
        const vendaDeletada = await Venda.findOneAndDelete({ _id:id });
        if(vendaDeletada){
            return res.json(vendaDeletada);
        }
    },

    async update(req,res){
        const { idUpdate } = req.params;
        const {id, data, produto} = req.body;

        const venda = await Venda.findOne({ _id:id });
        venda.id = id;
        venda.data = data;
        venda.produto = data;

        await venda.save();

        return res.json(venda);
    }
}