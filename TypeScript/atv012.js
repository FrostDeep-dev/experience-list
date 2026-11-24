"use strict";
//16)
function multiplicar(a, b) {
    return a * b;
}
console.log(multiplicar(5, 10));
//17)
function maiorDeIdade(idade) {
    if (idade >= 18) {
        console.log("Maior");
        return true;
    }
    else {
        console.log("Menor");
        return false;
    }
}
console.log(maiorDeIdade(20));
//18)
function saudacao(nome) {
    return "Olá " + nome;
}
console.log(saudacao("Ruan"));
//19)
function media(n1, n2, n3) {
    let media = (n1 + n2 + n3) / 3;
    return media;
}
console.log("Média = " + media(5, 6, 7));
//20)
function parOuImpar(num) {
    if (num % 2 == 0) {
        return "Par";
    }
    else {
        return "Ímpar";
    }
}
console.log(parOuImpar(7));
