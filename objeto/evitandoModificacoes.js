

//Object.preventExtensions

const produto = Object.preventExtensions({
    nome: 'Qualquer',
    preco: 1.99,
    tag: 'promo'
})


console.log('Extensivel:', Object.isExtensible(produto))