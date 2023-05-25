const form = document.getElementById("form_alterar");

function alterarCliente(){

    const id = form.querySelector('input[name="id"]');

    if(!id.value){
        alert("Insira o ID do cliente que deseja alterar!");
        return;
    }

    fetch(`http://localhost:8081/cliente/${id.value}`)
    .then((response) => response.json())
    .then((cliente) =>{
        console.log(cliente);

        if(!cliente){
            alert("Cliente não encontrado!");
            return;
        }

        return;
    })
    .catch((error) => {
        console.log(error);
    })

    const cpf = form.querySelector('input[name="cpf"');
    const nome = form.querySelector('input[name="nome"');

    if(!cpf.value){
        alert("CPF vazio!");
        return;
    }

    if(!nome.value){
        alert("Nome vazio!");
        return;
    }

    const obj = {
        idCliente: id.value,
        cpf: cpf.value,
        nome: nome.value
    }

    const json = JSON.stringify(obj);

    fetch(`http://localhost:8081/cliente/${id.value}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: json
    })
    .then((response) => response.json())
    .then(data =>{
        console.log(data);
        alert("Cliente alterado com sucesso!");
    })
    .catch((error) => {
        console.log(error);
    })
}