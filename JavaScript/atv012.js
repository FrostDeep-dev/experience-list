const lista = []

function adicionarProduto(lista){
        lista.push({produto:"Notebook", valor:3500},{produto:"Celular", valor:2200},{produto:"Monitor", valor:900},{produto:"Mouse",valor:50},{produto:"Teclado",valor:120})
        for(let i = 0;i<lista.length;i++){
            console.log(lista[i].produto+" - R$ "+lista[i].valor)
        }
}

adicionarProduto(lista)