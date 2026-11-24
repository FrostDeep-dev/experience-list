interface Produto{
    id:number
    nome:string
    preco:number
    quantidade:number
    categoria:string
    status:"Disponível"|"Esgotado"
}

class Produtos{
    lista:Produto[]=[
        {id:1,nome:"Celular",preco:3000,quantidade:10,categoria:"Eletrônico",status:"Disponível"},
        {id:2,nome:"Notebook",preco:4000,quantidade:5,categoria:"Eletrônico",status:"Disponível"},
        {id:3,nome:"Arroz",preco:10,quantidade:100,categoria:"Alimento",status:"Disponível"},
        {id:4,nome:"Sabão",preco:50,quantidade:50,categoria:"Limpeza",status:"Disponível"},
        {id:5,nome:"Feijão",preco:10,quantidade:100,categoria:"Alimento",status:"Disponível"},
        {id:6,nome:"Água",preco:5,quantidade:0,categoria:"Bebida",status:"Esgotado"}
    ]
    listarProdutos(){
        for(let i = 0;i<this.lista.length;i++){
            console.log(this.lista[i].nome)
        }
    }
    buscarProduto(id:number){
        let encontrado = false
        for(let j = 0;j<this.lista.length;j++){
            if(this.lista[j].id == id){
                console.log("Encontrado: "+this.lista[j].nome)
                encontrado = true
                break;
            }
        }
        if(encontrado == false){
            console.log("Não encontrado!")
        }
    }
    adicionarEstoque(id:number, quantidade:number){
        let encontrado = false
        for(let k=0;k<this.lista.length;k++){
            if(quantidade <= 0){
                console.log("Quantidade inválida!")
                break;
            }
            if(this.lista[k].id == id){
                encontrado = true
                this.lista[k].quantidade += quantidade
                this.lista[k].status = "Disponível"
                console.log("Adicionado! Estoque atual: "+this.lista[k].nome+" - " +this.lista[k].quantidade)
                break;
            }
        }
        if(encontrado == false && quantidade > 0){
            console.log("Não encontrado!")
        }
    }
    removerEstoque(id:number, quantidade:number){
        let encontrado = false
        for(let l=0;l<this.lista.length;l++){
            if(quantidade < 0){
                console.log("Quantidade inválida!")
                break;
            }
            if(this.lista[l].id == id && this.lista[l].quantidade < quantidade){
                console.log("Quantia insuficiente para remoção!")
                break;
            }
            if(this.lista[l].id == id){
                encontrado = true
                this.lista[l].quantidade -= quantidade
                console.log("Removido!")
                if(this.lista[l].quantidade <= 0){
                    this.lista[l].status = "Esgotado"
                    console.log("Item esgotado!")
                }

                break;
            }
        }
        if(encontrado = false && quantidade > 0){
            console.log("Produto não encontrado!")
        }
    }
    listarEsgotados(){
        let encontrado = false
        for(let n = 0;n<this.lista.length;n++){
            if(this.lista[n].status == "Esgotado"){
                console.log("Esgotado: "+this.lista[n].nome)
                encontrado = true
            }
        }
        if(encontrado == false){
            console.log("Nenhum item esgotado!")
        }
    }
    calcularValorEstoque(){
        let acumulador = 0
        
        for(let o=0;o<this.lista.length;o++){
            if(this.lista[o].preco > 0 && this.lista[o].quantidade > 0){
                acumulador += this.lista[o].preco * this.lista[o].quantidade
                

            }
        }
        console.log("Soma total de produtos: "+acumulador)
    }
}
const produtos = new Produtos()
produtos.calcularValorEstoque()
produtos.listarProdutos()
produtos.buscarProduto(3)
produtos.listarEsgotados()
produtos.adicionarEstoque(6,10)
produtos.listarEsgotados()
produtos.removerEstoque(6,10)
produtos.listarEsgotados()
produtos.calcularValorEstoque()
produtos.removerEstoque(1,5)
produtos.calcularValorEstoque()


