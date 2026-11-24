//11)

interface Livro {
    titulo:string
    autor:string
    paginas:number
}

const livros: Livro[] =[
    {titulo:"Programação",autor:"Fulano",paginas:100}
]

console.log(livros)

//12)

interface Carro {
    marca:string
    modelo:string
    ano:number
}

const lista: Carro[] =[
    {marca:"X",modelo:"Y",ano:1900}
]

lista.push({
    marca:"A",
    modelo:"B",
    ano:1500
})

console.log(lista)

//13

interface Filme{
    nome:string
    duracao:number
    assistido:boolean
}

const Lista: Filme[] =[{
    nome:"Filme1",
    duracao:1,
    assistido:true}
]

Lista.push({
    nome:"Filme2",
    duracao:2,
    assistido:false
})

console.log(Lista)

//14 e 15)

interface Funcionario {
    nome:string
    salario:number
}

const funcionarios: Funcionario[] = [
    {nome:"Ruan",salario:1500}
]
funcionarios.push({
    nome:"Pedro",
    salario:1800
})
funcionarios.push({
    nome:"Maria",
    salario:2200
})

for(let k = 0;k<funcionarios.length;k++){
    console.log("Nome: "+funcionarios[k].nome+"\nSalário: R$"+funcionarios[k].salario)
}