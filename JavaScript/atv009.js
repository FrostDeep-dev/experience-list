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


alunos(array)
