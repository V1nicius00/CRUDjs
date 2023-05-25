const form = document.getElementById("form_cadastro");

function cadastrarCliente(){

    const id = form.querySelector('input[name="id"]');
    const cpf = form.querySelector('input[name="cpf"]');
    const nome = form.querySelector('input[name="nome"]');

    if(!id.value){
        alert("Informe o ID!");
        return;
    }

    if(!cpf.value){
        alert("Informe o CPF!");
        return;
    }

    if(!nome.value){
        alert("Informe o nome!");
        return;
    }

    // const formData = new FormData(form);
    
    // const json = JSON.stringify(Object.fromEntries(formData));

    const obj = {
        idCliente: id.value,
        cpf: cpf.value,
        nome: nome.value
    }

    const json = JSON.stringify(obj);
      
    fetch('http://localhost:8081/cliente', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: json
        })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        alert("Cliente cadastrado com sucesso!");
    }) 
    .catch (error=>{
        console.log(error);
        alert("Erro ao cadastrar cliente!");
});

    
}

