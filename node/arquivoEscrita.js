const fs = require('fs')


const produto = {
    nome: 'celular',
    preco: 1244.33,
    desconto: 0.15
}

fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err =>{
    console.log(err || 'Arquivo salvo!')
})