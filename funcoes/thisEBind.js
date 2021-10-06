const pessoa = {
    saudacao: 'Bom dia!',
    falar(){
        console.log(this.saudacao)
    }
}

pessoa.falar()

const falar = pessoa.falar
falar() // conflito entre paradigmas: funcional e OO .. o this varia.


const falarDePessoa = pessoa.falar.bind(pessoa) //bind o objeto pessoa para a const
falarDePessoa()