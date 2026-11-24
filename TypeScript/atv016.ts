interface Produto{
    nome:string
    preco:number
    estoque:number
}

const Lista:Produto[] = [
    {nome:"Limão",preco:2,estoque:100},
    {nome:"Laranja",preco:10,estoque:0},
    {nome:"Melancia",preco:14,estoque:20},
    {nome:"Banana",preco:12,estoque:10}
]
console.log("Produtos disponíveis:")
for(let i = 0;i<Lista.length;i++){
    if(Lista[i].estoque > 0){
        console.log(Lista[i].nome+" - R$"+Lista[i].preco)
    }
}