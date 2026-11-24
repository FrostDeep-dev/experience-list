const array = [
    {nome:"Ana" , nota:10},
    {nome:"Carlos" , nota:8},
    {nome:"Pedro" , nota:6}
];

function alunos(array){
    for(let i = 0; i<array.length;i++){
       console.log(array[i].nome+" - "+array[i].nota)
    }
}

function buscarAluno(array){
    let busca = "Carlos"
    let encontrado = false
    for(let j = 0;j<array.length;j++){
        if (busca == array[j].nome){
            encontrado = true
            console.log("Nota: "+array[j].nota)
            break;
        }
    }
    if (!encontrado){
        console.log("Não encontrado")
        
    }
}

buscarAluno(array)

