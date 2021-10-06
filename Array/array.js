



let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Carlos', 'Bia', 'Ana']
console.log(aprovados)
console.log('------------------------')
console.log(aprovados[1])

aprovados.push('Felipe')
console.log(aprovados)

delete aprovados[1]
console.log(aprovados)

aprovados.splice(1, 1)
console.log(aprovados)


aprovados.splice(1, 1, 'Elemento 1', 'elemento 2')
console.log(aprovados)