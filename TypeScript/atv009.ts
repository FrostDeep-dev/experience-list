//01)

let codigo: string | number

codigo = "A10"
console.log(codigo)
codigo = 10
console.log(codigo)

//02)

let statusPedido: string | boolean

statusPedido = "Pendente"
console.log(statusPedido)
statusPedido = true
console.log(statusPedido)

//03)

function mostrarValor(dados: string|number){
    console.log(dados)
}

mostrarValor("Ana")
mostrarValor(100)

//04)

let resposta: string|number|boolean

resposta = "Letras, String"
console.log(resposta)
resposta = 500
console.log(resposta)
resposta = false
console.log(resposta)

//05)

function dobrar(valor: string|number){
    
    if (typeof valor == "number"){
        console.log(valor*2)
    }
    if (typeof valor == "string"){
        console.log(valor+valor)
    }
    
}

dobrar(10)
dobrar("oi")