function confirmarEnvio(event){

    event.preventDefault();

    let nome = document.getElementById("nome").value;

    let mensagem = document.getElementById("mensagem");

    mensagem.innerHTML =
    "Obrigado, <strong>" +
    nome +
    "</strong>! Sua mensagem foi enviada com sucesso.";

    document.getElementById("formulario").reset();

}

document
.getElementById("formulario")
.addEventListener("submit", confirmarEnvio);