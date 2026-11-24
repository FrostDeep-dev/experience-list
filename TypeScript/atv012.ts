//16)

function multiplicar(a: number,b:number):number{
    return a * b
}


console.log(multiplicar(5,10))

//17)

function maiorDeIdade(idade:number){
    if(idade >= 18){
        console.log("Maior")
        return true
    }
    else{
        console.log("Menor")
        return false
    }
}

console.log(maiorDeIdade(20))

//18)

function saudacao(nome:string){
    return "Olá "+nome
}

console.log(saudacao("Ruan"))

//19)

function media(n1:number,n2:number,n3:number):number{
    let media = (n1+n2+n3)/3
    return media
}

console.log("Média = "+media(5,6,7))

//20)

function parOuImpar(num:number){

    if(num%2 == 0){
        return "Par"
        
    }
    else{
        return "Ímpar"
    }
}

console.log(parOuImpar(7))