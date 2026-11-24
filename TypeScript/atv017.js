"use strict";
class Funcionario {
    nome;
    salario;
    constructor(nome, salario) {
        this.nome = nome;
        this.salario = salario;
    }
    aumentarSalario(valor) {
        this.salario += valor;
        console.log("Funcionário: " + this.nome + "\nNovo salário: " + this.salario);
    }
}
const funcionario = new Funcionario("Carlos", 2500);
funcionario.aumentarSalario(500);
