let listaNomes = [];

function exibirTexto( tag, texto){
    let campo = document.getElementById(tag);
    campo.innerHTML = texto;
}

function adicionarAmigo(){
    let nome = document.querySelector('input').value;
    //valida a entrada do nome
    if(nome == ""){
        Swal.fire({
            icon: "warning",
            title: "Atenção!",
            text: "Por favor, digite um nome.",
            confirmButtonColor: "#007bff"
        });
        ;
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