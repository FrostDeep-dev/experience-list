const array = [
    {nome:"Ana",nota:10},
    {nome:"Carlos",nota:8},
    {nome:"Maria",nota:9},
    {nome:"João",nota:5},
    {nome:"Lucas",nota:4}
]

function media(array){
    let soma = 0
    let quantidade = 0
    for(let i =0;i<array.length;i++){
        soma += array[i].nota
        quantidade += 1
    }
    let media = (soma/quantidade)
    console.log("Quantidade de notas: "+quantidade+"\nSoma de notas: "+soma+"\nMédia:"+media)
    
}

media(array)