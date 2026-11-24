let usuario = "admin";
let senha = "123";
let tentativas = 3;

while(true){

if (tentativas <= 0){
    console.log("Acabaram as tentativas")
    break;
}

else if (usuario === "admin" && senha === "123"){
    tentativas = 3;
    console.log("Acesso liberado")
    break;
}
else{
    console.log("Dados incorretos")
    tentativas -= 1;
}
}