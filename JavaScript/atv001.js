const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Nome: ', (nome) => {
    rl.question('Idade: ', (idade) => {    
        rl.question('Curso: ', (curso) => {
        console.log(`${nome} tem ${idade} anos e cursa ${curso}`)
        rl.close();
});
});
});



