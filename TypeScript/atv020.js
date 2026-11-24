"use strict";
class Loja {
    lista = [
        { nome: "Manga", preco: 20, categoria: "Alimento" },
        { nome: "Laranja", preco: 15, categoria: "Alimento" },
        { nome: "Banana", preco: 10, categoria: "Alimento" },
        { nome: "Celular", preco: 2000, categoria: "Eletrônico" },
        { nome: "Notebook", preco: 3300, categoria: "Eletrônico" },
        { nome: "Teclado", preco: 100, categoria: "Eletrônico" }
    ];
    adicionar(produto) {
        this.lista.push(produto);
    }
    listar() {
        for (let i = 0; i < this.lista.length; i++) {
            console.log(this.lista[i].nome + " - R$" + this.lista[i].preco + " - " + this.lista[i].categoria);
        }
    }
}
const loja = new Loja();
loja.adicionar({ nome: "Mouse", preco: 50, categoria: "Eletrônico" });
loja.listar();
