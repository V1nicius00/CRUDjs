const form = document.getElementById("form_venda");

function realizarVenda(){

    const id = form.querySelector('input[name="id"]');
    const produto = form.querySelector('input[name="produto"]');
    const data = form.querySelector('input[name="data"]');

    if(!id.value){
        alert("Informe o ID!");
        return;
    }

    if(!produto.value){
        alert("Informe o produto!");
        return;
    }

    if(!data.value){
        alert("Informe a data!");
        return;
    }

    const obj = {
        idVenda: id.value,
        produto: produto.value,
        data: data.value
    }

    const json = JSON.stringify(obj);

    fetch('http://localhost:8081/venda' , {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: json
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        alert("Venda realizada com sucesso!");
    })
    .catch(error => {
        console.log(error);
        alert("Erro ao realizar venda!");
    })
}