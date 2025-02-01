let listaNomes = [];

function exibirTexto( tag, texto){
    let campo = document.getElementById(tag);
    campo.innerHTML = texto;
}

function adicionarAmigo() {
    let nome = document.querySelector('input').value;

    if (nome === "") {
        Swal.fire({
            icon: "warning",
            title: "Atenção!",
            text: "Por favor, digite um nome.",
            confirmButtonColor: "#007bff"
        });
    } else {
        listaNomes.push(nome);
        exibirListaAmigos(); 
    }

    // Limpa o campo de entrada
    document.querySelector('input').value = "";
}


function exibirListaAmigos() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; 

    for (let i = 0; i < listaNomes.length; i++) {
        let li = document.createElement("li"); 
        li.textContent = listaNomes[i]; 
        lista.appendChild(li); 
    }
}



function sortearAmigo(){
    let indice = parseInt(Math.random() * listaNomes.length);
    exibirTexto("resultado", listaNomes[indice])
}
