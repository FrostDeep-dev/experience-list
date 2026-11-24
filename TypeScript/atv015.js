"use strict";
function formatarValor(valor) {
    if (typeof valor == "string") {
        return "Texto: " + valor;
    }
    else {
        return "Valor numérico: " + valor;
    }
}
console.log(formatarValor(15));
//console.log(formatarValor("Quinze"))
