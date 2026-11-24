interface Funcionario {
    nome:string
    idade:number
    cargo:"Desenvolvedor"|"Designer"|"Gerente"
    salario:number
    status:"Ativo"|"Férias"|"Desligado"
}



class Empresa{

Lista:Funcionario[] = [
    {nome:"Ruan",idade:21,cargo:"Desenvolvedor",salario:3000,status:"Desligado"},
    {nome:"Carlos",idade:24,cargo:"Designer",salario:4000,status:"Ativo"},
    {nome:"Ana",idade:26,cargo:"Gerente",salario:5000,status:"Férias"}
]

contratar(dados:Funcionario) : void{
    this.Lista.push(dados)
    console.log(dados.nome)
}
listarFuncionarios() {
    for(let i = 0;i<this.Lista.length;i++){
        console.log(this.Lista[i].nome)
    }
}
demitir(nome:string){
    for(let j = 0;j<this.Lista.length;j++){
        if(this.Lista[j].nome == nome && this.Lista[j].status != "Desligado"){
            this.Lista[j].status = "Desligado"
            break;
        }
    }
}
colocarFerias(nome:string){
    for(let k = 0;k<this.Lista.length;k++){
        if(this.Lista[k].nome == nome && this.Lista[k].status == "Ativo"){
            this.Lista[k].status = "Férias"
            break;
        }
    }
}
retornarFerias(nome:string){
    for(let l = 0;l<this.Lista.length;l++){
        if(this.Lista[l].nome == nome && this.Lista[l].status == "Férias"){
            this.Lista[l].status = "Ativo"
            break;
        }
    }
}
aumentarSalario(nome:string, porcentagem:number){
    for(let m = 0;m<this.Lista.length;m++){
        if(this.Lista[m].nome == nome && this.Lista[m].status != "Desligado"){
            let aumento = porcentagem / 100 * this.Lista[m].salario
            this.Lista[m].salario += aumento
            break;
        }
    }

}
}
const empresa = new Empresa()
empresa.listarFuncionarios()