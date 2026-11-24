"use strict";
class Escola {
    lista = [
        { nome: "Ruan", idade: 22, turma: "A", notas: [6, 7, 7], status: "Ativo" },
        { nome: "Carlos", idade: 20, turma: "B", notas: [5, 6, 7], status: "Trancado" },
        { nome: "Maria", idade: 25, turma: "A", notas: [7, 8, 9], status: "Formado" }
    ];
    matricular(nome) {
        this.lista.push(nome);
        console.log("Aluno matriculado!");
    }
    adicionarNota(nome, nota) {
        let encontrado = false;
        for (let i = 0; i < this.lista.length; i++) {
            if (this.lista[i].nome == nome && this.lista[i].status != "Trancado") {
                this.lista[i].notas.push(nota);
                encontrado = true;
                console.log("Nota adicionada!");
                break;
            }
        }
        if (encontrado == false) {
            console.log("Aluno não encontrado!");
        }
    }
    calcularMediaAluno(nome) {
        let quantidade = 0;
        let acumuladora = 0;
        let encontrado = false;
        for (let j = 0; j < this.lista.length; j++) {
            if (this.lista[j].nome == nome) {
                encontrado = true;
                for (let k = 0; k < this.lista[j].notas.length; k++) {
                    acumuladora += this.lista[j].notas[k];
                    quantidade += 1;
                }
                let media = acumuladora / quantidade;
                console.log("Soma: " + acumuladora);
                console.log("Quantidade de notas:" + quantidade);
                console.log("Média: " + media);
                break;
            }
        }
        if (encontrado == false) {
            console.log("Aluno não encontrado!");
        }
    }
    calcularMediaTurma(turma) {
        let quantidade = 0;
        let media = 0;
        let acumuladora = 0;
        let encontrado = false;
        for (let m = 0; m < this.lista.length; m++) {
            if (this.lista[m].turma == turma) {
                encontrado = true;
                for (let n = 0; n < this.lista[m].notas.length; n++) {
                    acumuladora += this.lista[m].notas[n];
                    quantidade += 1;
                }
            }
        }
        media = acumuladora / quantidade;
        console.log("Quantidade de notas: " + quantidade);
        console.log("Média: " + media);
        console.log("Soma: " + acumuladora);
        if (encontrado == false) {
            console.log("Turma não encontrada!");
        }
    }
    listarAprovados() {
    }
    listarReprovados() {
    }
    trancarMatricula(nome) {
    }
}
const aluno = new Escola();
aluno.matricular({ nome: "Joao", idade: 27, turma: "C", notas: [4, 5, 6], status: "Trancado" });
aluno.calcularMediaAluno("Maria");
aluno.calcularMediaTurma("A");
