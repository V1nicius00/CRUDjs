
fetch("http://localhost:8081/summary")
.then(response => response.json())
.then(data => {
    data.forEach(cliente => {
        const div = document.createElement("div");
        const line = document.createElement("p");
        line.innerHTML("ID: " + data.id + "<br>CPF: " + data.cpf + "<br>Nome: " + data.nome + "<br>");
        div.appendChild(line);

        cliente.VendasCliente.forEach(venda => {
            venda.forEach(products => {
                const lineVenda = document.createElement("ID Cliente: " + venda.idCliente + "<br>Produto: " + venda.produto + "<br>Data: " + venda.data + "<br>")
                div.appendChild(lineVenda);
            })
        })
    })

})
.catch(error => {
    console.log(error);
    alert("Erro ao listar resumo de vendas!");
})