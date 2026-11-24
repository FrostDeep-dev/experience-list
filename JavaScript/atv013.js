const lista = [
    {nome:"Monitor",valor:900},
    {nome:"Notebook",valor:3500},
    {nome:"Teclado",valor:100},
    {nome:"Mouse",valor:40},
    {nome:"Celular",valor:2200}

]

function produtoCaro(lista){
    let maior = 0
    let menor = lista[0].valor
    let nome1, nome2
    for(let i = 0;i<lista.length;i++){
        if(lista[i].valor > maior){
            maior = lista[i].valor
            nome1 = lista[i].nome
        }
        if(lista[i].valor < menor){
            menor = lista[i].valor
            nome2 = lista[i].nome
        }
    }
    console.log("Produto mais caro: "+nome1+" R$ "+maior)
    console.log("Produto menos caro: "+nome2+" R$ "+menor)
    
}

produtoCaro(lista)