"use strict";
class Loja {
    lista = [
        { nome: "Feijão", preco: 15, categoria: "Alimento", estoque: 10 },
        { nome: "Camisa", preco: 30, categoria: "Roupa", estoque: 20 },
        { nome: "Geladeira", preco: 5000, categoria: "Eletrônico", estoque: 5 },
        { nome: "Arroz", preco: 15, categoria: "Alimento", estoque: 10 }
    ];
    adicionarProduto(adicionar) {
        this.lista.push(adicionar);
        console.log("Produto adicionado!");
    }
    venderProduto(nome, quantidade) {
        let encontrado = false;
        for (let i = 0; i < this.lista.length; i++) {
            if (this.lista[i].nome == nome) {
                encontrado = true;
                if (this.lista[i].estoque < 0) {
                    console.log("Quantia insuficiente!");
                    break;
                }
                else {
                    this.lista[i].estoque -= quantidade;
                    console.log("Produto vendido! Quantidade restante: " + this.lista[i].estoque);
                    break;
                }
            }
        }
        if (encontrado == false) {
            console.log("Produto não encontrado!");
        }
    }
    reporEstoque(nome, reposicao) {
        let encontrado = false;
        for (let k = 0; k < this.lista.length; k++) {
            if (nome == this.lista[k].nome) {
                encontrado = true;
                this.lista[k].estoque += reposicao;
                console.log("Quantidade atual: " + this.lista[k].estoque);
                break;
            }
        }
        if (encontrado == false) {
            console.log("Produto não encontrado!");
        }
    }
    listarProdutos() {
        for (let l = 0; l < this.lista.length; l++) {
            console.log("Produto: " + this.lista[l].nome + " -- Preço: R$" + this.lista[l].preco + " -- Estoque: " + this.lista[l].estoque);
        }
    }
    listarCategoria() {
        console.log("Alimentos:\n");
        for (let m = 0; m < this.lista.length; m++) {
            if (this.lista[m].categoria == "Alimento") {
                console.log(this.lista[m].nome + " - " + this.lista[m].categoria);
            }
        }
        console.log("\nRoupa:\n");
        for (let p = 0; p < this.lista.length; p++) {
            if (this.lista[p].categoria == "Roupa") {
                console.log(this.lista[p].nome + " - " + this.lista[p].categoria);
            }
        }
        console.log("\nEletrônicos:\n");
        for (let q = 0; q < this.lista.length; q++) {
            if (this.lista[q].categoria == "Eletrônico") {
                console.log(this.lista[q].nome + " - " + this.lista[q].categoria);
            }
        }
    }
    calcularValorEstoque(nome) {
        for (let n = 0; n < this.lista.length; n++) {
            if (nome == this.lista[n].nome) {
                let soma = this.lista[n].preco * this.lista[n].estoque;
                console.log("Preço: " + this.lista[n].preco + " --Quantidade: " + this.lista[n].estoque + " --Valor Total: " + soma);
            }
        }
    }
    calcularValorEstoqueTotal() {
        let estoqueTotal = 0;
        let valorTotal = 0;
        for (let o = 0; o < this.lista.length; o++) {
            estoqueTotal += this.lista[o].estoque;
            valorTotal += this.lista[o].preco * this.lista[o].estoque;
        }
        console.log("Quantia total do estoque: " + estoqueTotal);
        console.log("Valor total do estoque: " + valorTotal);
    }
}
const produto = new Loja();
produto.listarCategoria();
