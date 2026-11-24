class ContaBancaria{
    titular:string;
    saldo:number;
    

    constructor(titular:string,saldo:number){
        this.titular = titular
        this.saldo = saldo
        
    }
    depositar(valor:number): void{
        this.saldo += valor
        console.log("Nome: "+this.titular+"\nSaldo total: "+this.saldo)
        
    }

}

const conta = new ContaBancaria("Ruan",100)
conta.depositar(150)

const conta2 = new ContaBancaria("Pedro", 500)
conta2.depositar(200)


