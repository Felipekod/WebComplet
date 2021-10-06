const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logadouro: 'Rua abc',
        numero: 1000
    }
}

const { nome, idade} = pessoa

console.log(nome, idade)


const { nome: n, idade: i} = pessoa

console.log(n, i)

