"use strict";
//06 e 07)
const lista = [
    { nome: "Pedro", idade: 20 },
    { nome: "Maria", idade: 18 },
    { nome: "Ruan", idade: 20 }
];
for (let i = 0; i < lista.length; i++) {
    console.log(lista[i].nome);
}
const produtos = [
    { nome: 'Mouse', preco: 30 }
];
produtos.push({
    nome: "Teclado",
    preco: 100
}, { nome: "Notebook",
    preco: 3700
});
produtos.push({
    nome: "Celular",
    preco: 2000
});
console.log(produtos);
for (let i = 0; i < produtos.length; i++) {
    console.log("Apenas Preço: R$" + produtos[i].preco);
}
console.log();
for (let j = 0; j < produtos.length; j++) {
    console.log("Produto: " + produtos[j].nome + "\nPreço: " + produtos[j].preco);
}
