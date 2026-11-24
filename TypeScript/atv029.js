"use strict";
class Produtos {
    lista = [
        { id: 1, nome: "Arroz", preco: 10, estoque: 100 },
        { id: 2, nome: "Feijão", preco: 10, estoque: 100 },
        { id: 3, nome: "Carne", preco: 40, estoque: 50 }
    ];
    itemCarrinho = [];
    adicionar(id, quantia) {
        let encontrado = false;
        for (let i = 0; i < this.lista.length; i++) {
            if (id == this.lista[i].id && quantia <= this.lista[i].estoque) {
                encontrado = true;
                this.lista[i].estoque -= quantia;
                this.itemCarrinho.push({
                    produto: this.lista[i],
                    quantidade: quantia
                });
                console.log("Produto adicionado!");
            }
        }
        if (encontrado == false) {
            console.log("Produto não encontrado!");
        }
    }
    remover(id, quantia) {
        let encontrado = false;
        let encontradoCarrinho = false;
        for (let j = 0; j < this.lista.length; j++) {
            if (id == this.lista[j].id) {
                encontrado = true;
                for (let l = 0; l < this.itemCarrinho.length; l++) {
                    if (this.itemCarrinho[l].produto.id == id) {
                        encontradoCarrinho = true;
                        if (this.itemCarrinho[l].quantidade == quantia) {
                            this.itemCarrinho.splice(l, 1);
                            this.lista[j].estoque += quantia;
                            console.log("Removido!");
                        }
                        else if (this.itemCarrinho[l].quantidade > quantia) {
                            this.itemCarrinho[l].quantidade -= quantia;
                            this.lista[j].estoque += quantia;
                            console.log("Removido");
                        }
                        else if (this.itemCarrinho[l].quantidade < quantia) {
                            console.log("Quantidade insuficiente!");
                        }
                    }
                }
                if (encontradoCarrinho == false) {
                    console.log("Produto não encotrado no carrinho!");
                }
            }
        }
        if (encontrado == false) {
            console.log("Produto não encontrado na loja!");
        }
    }
    listarMercado() {
        for (let k = 0; k < this.lista.length; k++) {
            console.log("Produto: " + this.lista[k].nome + " Estoque: " + this.lista[k].estoque);
        }
    }
    listarCarrinho() {
        for (let m = 0; m < this.itemCarrinho.length; m++) {
            console.log("Carrinho: " + this.itemCarrinho[m].produto.nome + " Quantidade: " + this.itemCarrinho[m].quantidade);
        }
    }
    alterarQuantidade(id, quantia, condicao) {
        let calculo = 0;
        let encontrado = false;
        for (let n = 0; n < this.itemCarrinho.length; n++) {
            if (quantia < 0) {
                console.log("Quantia negativa! Por favor, coloque positiva!");
                break;
            }
            if (this.itemCarrinho[n].produto.id == id && condicao == "adicionar") {
                encontrado = true;
                for (let o = 0; o < this.lista.length; o++) {
                    if (this.lista[o].id == id) {
                        let calculo2 = this.lista[o].estoque - quantia;
                        if (calculo2 < 0) {
                            console.log("Estoque insuficiente");
                        }
                        if (calculo2 >= 0) {
                            this.itemCarrinho[n].quantidade += quantia;
                            this.lista[o].estoque -= quantia;
                        }
                    }
                }
            }
            if (this.itemCarrinho[n].produto.id == id && condicao == "retirar") {
                encontrado = true;
                calculo = this.itemCarrinho[n].quantidade - quantia;
                if (calculo < 0) {
                    console.log("Não pode retirar mais do que possui!");
                }
                if (calculo >= 0) {
                    this.itemCarrinho[n].quantidade -= quantia;
                    console.log("Quantia alterada!");
                    for (let p = 0; p < this.lista.length; p++) {
                        if (this.lista[p].id == id) {
                            this.lista[p].estoque += quantia;
                        }
                    }
                }
            }
        }
        if (encontrado == false) {
            console.log("Produto não encontrado!");
        }
    }
    calcularSubTotal() {
        for (let q = 0; q < this.itemCarrinho.length; q++) {
            let subtotal = this.itemCarrinho[q].produto.preco * this.itemCarrinho[q].quantidade;
            console.log("Produto: " + this.itemCarrinho[q].produto.nome + " Total: " + subtotal);
        }
    }
    calcularTotal() {
        let total = 0;
        for (let r = 0; r < this.itemCarrinho.length; r++) {
            let subtotal = this.itemCarrinho[r].produto.preco * this.itemCarrinho[r].quantidade;
            total += subtotal;
        }
        console.log("Valor total: " + total);
    }
    verificacao(id, quantia) {
        let encontrado = false;
        for (let s = 0; s < this.itemCarrinho.length; s++) {
            if (this.itemCarrinho[s].produto.id == id) {
                encontrado = true;
                let calculo = this.itemCarrinho[s].produto.estoque - quantia;
                if (calculo > 0) {
                    console.log("Estoque suficiente!");
                }
                else {
                    console.log("Estoque insuficiente!");
                }
            }
        }
        if (encontrado == false) {
            console.log("Produto não encontrado!");
        }
    }
    desconto(total, desconto) {
        let descontoValor = total * (desconto / 100);
        let pagamento = total - descontoValor;
        console.log("Valor com desconto: " + pagamento);
    }
}
/*

Verificar se o produto possui estoque suficiente.
Aplicar desconto.
*/
const produto = new Produtos();
produto.adicionar(2, 100);
produto.listarMercado();
produto.listarCarrinho();
produto.remover(2, 50);
produto.listarMercado();
produto.listarCarrinho();
produto.alterarQuantidade(2, 100, "adicionar");
produto.listarCarrinho();
produto.alterarQuantidade(2, 1000, "retirar");
produto.listarCarrinho();
produto.listarMercado();
produto.adicionar(1, 10);
produto.calcularSubTotal();
produto.calcularTotal();
produto.verificacao(2, 1000);
produto.verificacao(2, 10);
produto.desconto(100, 10);
