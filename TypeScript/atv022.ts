interface Livro {
    titulo:string
    autor:string
    genero:"Fantasia"|"Terror"|"Romance"|"Tecnologia"
    disponivel: boolean
}

class Biblioteca {

Lista:Livro[] = [
    {titulo:"Livro1",autor:"Autor1",genero:"Fantasia",disponivel:true},
    {titulo:"Livro2",autor:"Autor2",genero:"Terror",disponivel:true},
    {titulo:"Livro3",autor:"Autor3",genero:"Romance",disponivel:false},
    {titulo:"Livro4",autor:"autor4",genero:"Tecnologia",disponivel:true}
]

adicionarLivros(livro:Livro): void{
    this.Lista.push(livro)
}
listarLivros(){
    for(let i = 0;i<this.Lista.length;i++){
        console.log(this.Lista[i].titulo+"-"+this.Lista[i].genero)
    }
}
emprestarLivro(){
    for(let j = 0;j<this.Lista.length;j++){
        if(this.Lista[j].disponivel == true){
            this.Lista[j].disponivel == false
        }
        
    }
}
devolverLivro(){
    console.log("\nLivros para devolução:\n")
    for(let k = 0;k<this.Lista.length;k++){
        if(this.Lista[k].disponivel == false){
            console.log(this.Lista[k].titulo)
            this.Lista[k].disponivel == true
        }
        
    }
}
listarDisponiveis(){
    console.log("\nLivros disponíveis para emprestimo:\n")
    for(let l = 0;l<this.Lista.length;l++){
        if(this.Lista[l].disponivel == true){
            console.log(this.Lista[l].titulo)
        }
    }
}
}

const biblioteca = new Biblioteca()
biblioteca.adicionarLivros({titulo:"Livro5",autor:"Autor5",genero:"Fantasia",disponivel:true})
biblioteca.listarLivros()
biblioteca.emprestarLivro()
biblioteca.devolverLivro()
biblioteca.listarDisponiveis()