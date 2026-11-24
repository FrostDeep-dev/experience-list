interface Usuario{
    nome:string
    idade:number
    status:"ativo"|"inativo"
}

class SistemaUsuarios{
    usuarios: Usuario[] =[
        {nome:"Carlos",idade:24,status:"ativo"},
        {nome:"Ana",idade:26,status:"inativo"}
    ]

    adicionar(usuario:Usuario): void{
          this.usuarios.push(usuario)   
    }
    lista(){
        for(let i = 0;i<this.usuarios.length;i++){
            if(this.usuarios[i].status === "ativo"){
                console.log(this.usuarios[i].nome)
            }
            
        }
        
    }
}


const sistema = new SistemaUsuarios()
sistema.lista()





