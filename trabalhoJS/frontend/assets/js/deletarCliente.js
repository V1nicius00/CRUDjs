const form = document.getElementById("form_delete");

function deletarCliente(){

    const id = form.querySelector('input[name="id"');
    const obj = {idCliente: id.value};
    const json = JSON.stringify(obj);

    fetch(`http://localhost:8081/cliente/${id.value}`, {
        method: 'delete',
        headers:{
            'Content-Type': 'application/json'
        },
        body: json
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        alert("Cliente deletado!");
    })
    .catch(error => {
        console.log(error);
        alert("Erro ao deletar cliente!");
    })
    
}