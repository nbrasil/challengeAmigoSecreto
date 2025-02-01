let listaNomes = [];

function exibirTexto( tag, texto){
    let campo = document.getElementById(tag);
    campo.innerHTML = texto;
}

function adicionarAmigo(){
    let nome = document.querySelector('input').value;
    //valida a entrada do nome
    if(nome == ""){
        alert("Por favor, digite um nome.");
    }else{
        listaNomes.push(nome);   
    }
    //exibe os nomes em formato de lista
    exibirTexto("listaAmigos", listaNomes.join("<li></li>"));
    //limpa o campo
    document.querySelector('input').value = "";
}


function sortearAmigo(){
    let indice = parseInt(Math.random() * listaNomes.length);
    console.log(indice)
    exibirTexto("resultado", listaNomes[indice])

}