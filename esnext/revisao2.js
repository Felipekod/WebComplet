// Arrow function
const soma = (a, b) => a + b
console.log(soma(2, 3))

console.log(`-------------------------`)
//Arrow function(this)
const lexico1 = () => console.log(this === exports)
lexico1()

console.log(`-------------------------`)
//Parametro default
function log(texto = 'Node') {
    console.log(texto) 
}

log()
log('Sou mais forte')

console.log(`-------------------------`)
// Operador rest
function total(...numeros) {
    let total = 0
    numeros.forEach( n => total += n)
    return total
}
console.log(total(5,6,7,8,6,5,4,4))
