"use strict";
class Empresa {
    Lista = [
        { nome: "Ruan", idade: 21, cargo: "Desenvolvedor", salario: 3000, status: "Desligado" },
        { nome: "Carlos", idade: 24, cargo: "Designer", salario: 4000, status: "Ativo" },
        { nome: "Ana", idade: 26, cargo: "Gerente", salario: 5000, status: "Férias" }
    ];
    contratar(dados) {
        this.Lista.push(dados);
    }
    listarFuncionarios() {
        for (let i = 0; i < this.Lista.length; i++) {
            console.log(this.Lista[i].nome);
        }
    }
}
const empresa = new Empresa();
empresa.listarFuncionarios();
