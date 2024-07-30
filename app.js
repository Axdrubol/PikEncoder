function textoExibido(tag, text) {
    let textoSaida = document.querySelector(tag);
    textoSaida.innerHTML = text;
}


function segundaTela() {
    textoExibido("h3", "");
    textoExibido("h4", "");
    document.getElementById("imagemConan").style.display = "none";
    document.getElementById("mensagemCodificada").style.visibility = "visible";
}


function codificarTexto() {
    let textoDigitado = document.querySelector("textarea").value;

    if (textoDigitado.trim() != "") {
        let codificadorTexto = removerDiacríticos(textoDigitado.toLowerCase())
            .replace(/e/g, "enter")
            .replace(/i/g, "imes")
            .replace(/a/g, "ai")
            .replace(/o/g, "ober")
            .replace(/u/g, "ufat");

        textoExibido("h2", codificadorTexto);
        segundaTela();
        document.querySelector("textarea").value = "";
    }
    else {
        alert("Erro #01:\nPor favor, insira um texto para ser codificado.");
    }
}


function decodificarTexto() {
    let decodificadorTexto = document.querySelector("textarea").value;

    if (decodificadorTexto.trim() != "") {
        let textoCodificado = removerDiacríticos(decodificadorTexto.toLowerCase())
            .replace(/enter/g, "e")
            .replace(/imes/g, "i")
            .replace(/ai/g, "a")
            .replace(/ober/g, "o")
            .replace(/ufat/g, "u");

        textoExibido("h2", textoCodificado);
        segundaTela();
        document.querySelector("textarea").value = "";
    }
    else {
        alert("Erro #02:\nPor favor, insira um texto para ser decodificado.");
    }
}


function removerDiacríticos(userInput) {
    return userInput.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}


function copiarTexto() {
    let textoParaCopiar = document.getElementById("mensagemCodificada").innerText;
    navigator.clipboard.writeText(textoParaCopiar);
    document.getElementById("mensagemCodificada").innerText = "";
}