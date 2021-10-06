



function criarProduto(nome, preco) {

    return{
        nome,
        preco,
        desconto: 0.1
    }
}

const produto1 = criarProduto(' notebook', 2222)
const produto2 = criarProduto('ipad', 3222)

console.log(produto1, produto2)