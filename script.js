var textInput = document.querySelector("#campo-texto");
var outputArea = document.querySelector("#mensagem-criptografada"); // Nova classe para o elemento pai

function criptografar() {
    var texto = textInput.value;

    var resultCriptografia = texto.replace(/e/g, 'enter').replace(/i/g, 'imes').replace(/a/g, 'ai').replace(/o/g, 'ober').replace(/u/g, 'ufat');

    outputArea.innerHTML = '<textarea readonly id="resultado" class="resultado">' + resultCriptografia + '</textarea>' + '<button class="btn-copiar" onclick="copiar()">copiar</button>';

    limparCampo();
}

function descriptografar() {
    var texto = textInput.value;

    var resultDescriptografia = texto.replace(/enter/g, 'e').replace(/imes/g, 'i').replace(/ai/g, 'a').replace(/ober/g, 'o').replace(/ufat/g, 'u');

    outputArea.innerHTML = '<textarea readonly id="resultado" class="resultado">' + resultDescriptografia + '</textarea>' + '<button class="btn-copiar" onclick="copiar()">copiar</button>';

    limparCampo();
}

function copiar() {
   navigator.clipboard.writeText(document.querySelector("#resultado").value);
   alert('texto copiado!');
    
}

function limparCampo() {
    textInput.value = '';
}