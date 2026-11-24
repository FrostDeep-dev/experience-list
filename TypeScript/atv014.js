"use strict";
class ContaBancaria {
    titular;
    saldo;
    constructor(titular, saldo) {
        this.titular = titular;
        this.saldo = saldo;
    }
    depositar(valor) {
        this.saldo += valor;
        console.log("Nome: " + this.titular + "\nSaldo total: " + this.saldo);
    }
}
const conta = new ContaBancaria("Ruan", 100);
conta.depositar(150);
const conta2 = new ContaBancaria("Pedro", 500);
conta2.depositar(200);
conta.depositar(750);
conta2.depositar(300);
