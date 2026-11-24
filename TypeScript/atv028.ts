interface Aluno{
    id:number
    nome:string
    idade:number
    curso:string
    notas:number[]
    status:"Matriculado"|"Trancado"|"Formado"
}

class Alunos{
    lista:Aluno[] = [
        {id:1,nome:"Ruan",idade:22,curso:"ADS",notas:[6,7,8],status:"Matriculado"},
        {id:2,nome:"João",idade:24,curso:"Medicina",notas:[5,8,9],status:"Matriculado"},
        {id:3,nome:"Maria",idade:26,curso:"Professora",notas:[6,8,9],status:"Formado"},
        {id:4,nome:"Carlos",idade:20,curso:"Engenharia",notas:[5,6,8],status:"Trancado"}
    ]
    media(id:number){
        let contador = 0
        let acumulador = 0
        for(let i = 0;i<this.lista.length;i++){
            if(id == this.lista[i].id){
                for(let j = 0;j<this.lista[i].notas.length;j++){
                acumulador += this.lista[i].notas[j]
                contador += 1
            }
            let media = acumulador / contador
            console.log("Média: "+media)
            }
        }
    }
    aprovado(id:number){
        let acumulador = 0
        let contador = 0
        for(let k = 0;k<this.lista.length;k++){
            if(this.lista[k].id == id){
                for(let l=0;l<this.lista[k].notas.length;l++){
                    acumulador += this.lista[k].notas[l]
                    contador += 1
                }
                let media = acumulador / contador
                if(media >= 7){
                    console.log("Aprovado!")
                }
                else{
                    console.log("Reprovado!")
                }
            }
        }
    }
    listarAprovados(){
        for(let m = 0;m<this.lista.length;m++){
            let acumulador = 0
            let contador = 0
            let media = 0
            for(let n=0;n<this.lista[m].notas.length;n++){
                acumulador += this.lista[m].notas[n]
                contador += 1
            }
            media = acumulador / contador
            if(media >= 7){
                console.log("Aprovado: "+this.lista[m].nome)
            }
        }
    }
    listarReprovados(){
        for(let o=0;o<this.lista.length;o++){
            let acumulador = 0
            let contador = 0
            let media = 0
            for(let p = 0;p<this.lista[o].notas.length;p++){
                acumulador += this.lista[o].notas[p]
                contador += 1
            }
            media = acumulador / contador
            if(media < 7){
                console.log("Reprovado: "+this.lista[o].nome)
            }
        }
    }
    mediaGeral(){
        let total = 0
        let contador2 = 0
        for(let q=0;q<this.lista.length;q++){
            
            let acumulador = 0
            let contador = 0
            let media = 0
            for(let r =0;r<this.lista[q].notas.length;r++){
                acumulador += this.lista[q].notas[r]
                contador += 1
            }
            media = acumulador / contador
            total += media
            contador2 += 1
        }
        let resultado = total / contador2
        console.log("Média geral: "+resultado)
    }
}
const aluno = new Alunos()
aluno.media(3)
aluno.aprovado(3)
aluno.media(4)
aluno.aprovado(4)
aluno.listarAprovados()
aluno.listarReprovados()
aluno.mediaGeral()