"use strict";
//01)
let codigo;
codigo = "A10";
console.log(codigo);
codigo = 10;
console.log(codigo);
//02)
let statusPedido;
statusPedido = "Pendente";
console.log(statusPedido);
statusPedido = true;
console.log(statusPedido);
//03)
function mostrarValor(dados) {
    console.log(dados);
}
mostrarValor("Ana");
mostrarValor(100);
//04)
let resposta;
resposta = "Letras, String";
console.log(resposta);
resposta = 500;
console.log(resposta);
resposta = false;
console.log(resposta);
//05)
function dobrar(valor) {
    typeof valor;
    if (valor == Number) {
        console.log(valor + valor);
    }
    if (valor == String) {
        console.log(valor);
    }
}
dobrar(10);
dobrar("oi");
