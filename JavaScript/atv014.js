const livros = [
    {titulo:"JavaScript",autor:"João",emprestado:false},
    {titulo:"Java",autor:"Ana",emprestado:false},
    {titulo:"TypeScript",autor:"Carlos",emprestado:true}
]

function listar(livros){
    console.log("----Lista----")
    for(let i=0;i<livros.length;i++){
        if(livros[i].emprestado == false){
            console.log("O livro "+livros[i].titulo+", feito por "+livros[i].autor+", está disponível")
       }
        else{
            console.log("O livro "+livros[i].titulo+", feito por "+livros[i].autor+", não está disponível")
       }
    }
    console.log("----Disponíveis----")
}
function emprestar(livros){
    for(let j=0;j<livros.length;j++){
        if(livros[j].emprestado == false){
            console.log("Livros disponíveis: "+livros[j].titulo)
        }
    }
    console.log("----Para devolução----")
}

function devolver(livros){
    for(let k=0;k<livros.length;k++){
        if(livros[k].emprestado == true){
            console.log("Livros para devolução: "+livros[k].titulo)
        }
    }
}

listar(livros)
emprestar(livros)
devolver(livros)