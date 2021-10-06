const produtos = [
    { nome: 'notebook', preco: 2500, fragil: true},
    { nome: 'ipad', preco: 3500, fragil: true},
    { nome: 'copo', preco: 25, fragil: true},
    { nome: 'copo plastico', preco: 30, fragil: false}

]



console.log(produtos.filter(function(p){
    return p.preco > 2500
}))