


const pilotos = ['Vettel', 'Alonso', 'Massa', 'Raikkonen']

pilotos.pop() // remove ultimo elemento do array

console.log(pilotos)

pilotos.push('Senna')

console.log(pilotos)

pilotos.shift() //remove primeiro elemento
console.log(pilotos)

pilotos.unshift("Hamilton") // add no primeiro elemento

//adicionar no indice
pilotos.splice(2, 0, 'Bottas', 'Massinha')

console.log(pilotos)

pilotos.splice(1,2, 'Rubinho') // deleta 2 a partir do indice 1 e add rubinho
console.log(pilotos)


