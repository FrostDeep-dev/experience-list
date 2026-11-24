interface Funcionario{
    id:number
    nome:string
    idade:number
    cargo:string
    status:"Ativo"|"Inativo"|"Desligado"
    salario:number
}
class Funcionarios{
    lista:Funcionario[] = [
        {id:1,nome:"Ruan",idade:22,cargo:"ADS",status:"Inativo",salario:2000},
        {id:2,nome:"João",idade:26,cargo:"Pediatra",status:"Inativo",salario:1500},
        {id:3,nome:"Gustavo",idade:24,cargo:"Professor",status:"Ativo",salario:3000},
        {id:4,nome:"Maria",idade:29,cargo:"Medicina",status:"Ativo",salario:4000},
        {id:5,nome:"Carlos",idade:34,cargo:"Enfermagem",status:"Desligado",salario:2500}
    ]
    listar(){
        for(let i = 0;i<this.lista.length;i++){
            console.log(this.lista[i].nome)
        }
    }
    buscar(num:number){
        let encontrado = false
        for(let j=0;j<this.lista.length;j++){
            if(this.lista[j].id == num){
                console.log("Encontrado: "+this.lista[j].nome)
                encontrado = true
            }
        }
        if(encontrado == false){
            console.log("Não encontrado!")
        }
    }
    listarAtivos(){
        let encontrado = false
        for(let k=0;k<this.lista.length;k++){
            if(this.lista[k].status == "Ativo"){
                console.log("Ativo: "+this.lista[k].nome)
                encontrado = true
            }
        }
        if (encontrado == false){
            console.log("Nenhum funcionário ativo identificado!")
        }
    }
    alterarStatus(idDigitado:number, novoStatus:string){
        let encontrado = false
        for(let l=0;l<this.lista.length;l++){
            if(this.lista[l].id == idDigitado){
                encontrado = true
                if(novoStatus == "Ativo" || novoStatus =="Inativo" || novoStatus == "Desligado"){
                    this.lista[l].status = novoStatus
            }
            }
        }
        if (encontrado == false){
            console.log("Id não identificado!")
        }
    }
    media(){
        let contador = 0
        let media = 0
        let acumulador = 0
        for(let m = 0;m<this.lista.length;m++){
            if(this.lista[m].status == "Ativo"){
                contador += 1
                acumulador += this.lista[m].salario
            }
        }
        media = acumulador / contador
        let resultado = media.toFixed(2)
        console.log("Média: " +resultado)
    }
}

const funcionario = new Funcionarios()
funcionario.listar()
funcionario.buscar(6)
funcionario.listarAtivos()
funcionario.alterarStatus(5,"Ativo")
funcionario.listarAtivos()
funcionario.media()