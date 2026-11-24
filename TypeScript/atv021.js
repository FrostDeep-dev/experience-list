"use strict";
class Empresa {
    lista = [
        { nome: "Carlos", idade: 24, cargo: "Administração", status: "Ativo" },
        { nome: "João", idade: 27, cargo: "Médico", status: "Férias" }
    ];
    adicionar(funcionario) {
        this.lista.push(funcionario);
    }
    listarAtivos() {
        for (let i = 0; i < this.lista.length; i++) {
            if (this.lista[i].status == "Ativo") {
                console.log(this.lista[i].nome + " - " + this.lista[i].status);
            }
        }
    }
    listarInativos() {
        for (let k = 0; k < this.lista.length; k++) {
            if (this.lista[k].status == "Inativo") {
                console.log(this.lista[k].nome + " - " + this.lista[k].status);
            }
        }
    }
    listarFerias() {
        for (let l = 0; l < this.lista.length; l++) {
            if (this.lista[l].status == "Férias") {
                console.log(this.lista[l].nome + " - " + this.lista[l].status);
            }
        }
    }
    buscar(nome) {
        let encontrado = false;
        for (let j = 0; j < this.lista.length; j++) {
            if (nome === this.lista[j].nome) {
                console.log(nome + " -> encontrado!");
                encontrado = true;
            }
        }
        if (!encontrado) {
            console.log(nome + " -> não encontrado!");
        }
    }
}
const empresa = new Empresa();
empresa.adicionar({ nome: "Ana", idade: 26, cargo: "Enfermagem", status: "Inativo" });
empresa.listarAtivos();
empresa.buscar("Lucas");
empresa.buscar("Carlos");
empresa.listarInativos();
empresa.listarFerias();
