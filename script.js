var textoEntrada = document.querySelector("#input-text");
var textoSaida = document.querySelector("#output-text");
var texto;
var textoCopiado;

function encriptografar() {
    texto = textoEntrada.value;
    
    var saidaEncriptada = texto
    .replaceAll('e', 'enter')
    .replaceAll('i', 'imes')
    .replaceAll('a', 'ai')
    .replaceAll('o', 'ober')
    .replaceAll('u', 'ufat');

    document.getElementById('output-text').innerHTML = saidaEncriptada;

}

function desencriptografar() {
    texto = textoEntrada.value;
    var saidaDesencriptada = texto
    .replaceAll('enter', 'e')
    .replaceAll('imes', 'i')
    .replaceAll('ai', 'a')
    .replaceAll('ober', 'o')
    .replaceAll('ufat', 'u');

    document.getElementById('output-text').innerHTML = saidaDesencriptada;
   
}

function copiar(){
    textoCopiado = document.getElementById('output-text');
    textoCopiado.select();
    document.execCommand('copy');
    alert('Ai sim!! Texto copiado para a area de transferência!');
    limparInputArea(); 
}



function limparInputArea() {
    textoEntrada = document.querySelector('#input-text');
    textoEntrada.value = '';
}
