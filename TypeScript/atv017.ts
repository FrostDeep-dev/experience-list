class Funcionario{
    nome:string;
    salario:number;

    constructor(nome:string,salario:number){
        this.nome = nome
        this.salario = salario
    }

    aumentarSalario(valor:number){
        this.salario += valor
        console.log("Funcionário: "+this.nome+"\nNovo salário: "+this.salario)
    }
}

const funcionario = new Funcionario("Carlos", 2500)
funcionario.aumentarSalario(500)