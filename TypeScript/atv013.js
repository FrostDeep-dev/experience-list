"use strict";
//21 e 22)
class Pessoa {
    nome;
    idade;
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    apresentar() {
        console.log("Olá, meu nome é " + this.nome + ", tenho " + this.idade + " anos de idade");
    }
}
const pessoa = new Pessoa("Ruan", 22);
pessoa.apresentar();
//23 e 24)
class Produto {
    nome2;
    preco;
    constructor(nome2, preco) {
        this.nome2 = nome2;
        this.preco = preco;
    }
    apresentar2() {
        console.log("Produto: " + this.nome2 + "\nPreço: " + this.preco);
    }
    mostrarProduto() {
        console.log("Produto: " + this.nome2 + "\nPreço: " + this.preco);
    }
}
const produto = new Produto("Celular", 2000);
produto.apresentar2();
const produto2 = new Produto("Notebook", 4500);
produto2.apresentar2();
const produto3 = new Produto("Mouse", 30);
produto3.mostrarProduto();
