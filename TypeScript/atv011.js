"use strict";
//11)
const livros = [
    { titulo: "Programação", autor: "Fulano", paginas: 100 }
];
console.log(livros);
const lista = [
    { marca: "X", modelo: "Y", ano: 1900 }
];
lista.push({
    marca: "A",
    modelo: "B",
    ano: 1500
});
console.log(lista);
const Lista = [{
        nome: "Filme1",
        duracao: 1,
        assistido: true
    }
];
Lista.push({
    nome: "Filme2",
    duracao: 2,
    assistido: false
});
console.log(Lista);
const funcionarios = [
    { nome: "Ruan", salario: 1500 }
];
funcionarios.push({
    nome: "Pedro",
    salario: 1800
});
funcionarios.push({
    nome: "Maria",
    salario: 2200
});
for (let k = 0; k < funcionarios.length; k++) {
    console.log("Nome: " + funcionarios[k].nome + "\nSalário: R$" + funcionarios[k].salario);
}
