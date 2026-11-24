const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function listarNomes(nomes){
    for(let i = 0; e < nomes.lenght;i++){
        console.log(nomes[i]);
    }
}

rl.question("Nome 1: ", (nome1) => {
    rl.question("Nome 2: ", (nome2) =>{
        rl.question("Nome 3: ", (nome3) => {

            const nomes = [nome1, nome2, nome3];
            
            console.log(nomes);

            rl.close();
        });
    });
});





