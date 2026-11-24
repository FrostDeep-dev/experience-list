const lista = []

function adicionarFuncionario(lista){

    lista.push({nome:"Ruan",cargo:"Programador",salario:3000})
    lista.push({nome:"João",cargo:"Açogueiro",salario:2500})
    lista.push({nome:"Carlos",cargo:"Vendedor",salario:2000})
    
}

function listarFuncionarios(lista){
    for(let j = 0;j<lista.length;j++){
        console.log("Funcionário: "+lista[j].nome+"\nCargo: "+lista[j].cargo+"\nSalário: R$"+lista[j].salario+"\n")
    }
    
}

function salarioTotal(lista){
    let soma = 0

    for(let i = 0;i<lista.length;i++){
        soma += lista[i].salario
    }
    console.log("Valor Total: R$"+soma)
}

function buscarFuncionario(lista){
    let funcionario = "Carlo"
    let encontrado = false
    for(let k = 0;k<lista.length;k++){
        if(lista[k].nome == funcionario){
            console.log("Funcionário encontrado!")
            encontrado = true
            break;
        }
    }
    if (!encontrado){
        console.log("Usuário não encontrado")
    }
}
adicionarFuncionario(lista)

listarFuncionarios(lista)

salarioTotal(lista)

buscarFuncionario(lista)