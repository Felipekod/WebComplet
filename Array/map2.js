

const carrinho = [
    '{"nome": "Borranha", "preco": 3.45 }',
    '{"nome": "caderno", "preco": 5.45 }',
    '{"nome": "lapis", "preco": 7.85 }'
]


//retornar um array com precos

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map(paraObjeto).map(apenasPreco)

console.log(resultado)