interface Aluno {
    nome:string
    nota:number
}

const Lista:Aluno[] = [
    {nome:"Ruan",nota:7},
    {nome:"Carlos",nota:6},
    {nome:"Maria",nota:8},
    {nome:"Pedro",nota:-5},
    {nome:"Lucas",nota:15}
]

function listarAprovados(){
    for(let i = 0;i<Lista.length;i++){
        if(Lista[i].nota > 10 || Lista[i].nota < 0){
            console.log(Lista[i].nome+ "- Nota inválida!")
        }
        else if(Lista[i].nota >= 7){
            console.log(Lista[i].nome+"- Aprovado!")
        }
        else if(Lista[i].nota >= 5){
            console.log(Lista[i].nome+"- Recuperação!")
        }
        else{
            console.log(Lista[i].nome+"- Reprovado!")
        }
    }
}

console.log(listarAprovados())