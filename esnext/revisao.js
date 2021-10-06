const { xor } = require("lodash")

// let e const
{
    var a = 2
    let b = 3
    console.log(b)
}
console.log(a)


// Template String
const produto = 'iPad'
console.log(`Nome: ${produto}`)

console.log(`------------------------------------`)
// Destructuring
const [l, e, ...resto] = 'Cod3r'
console.log(l, e, resto)

console.log(`------------------------------------`)

const [x, ,y ] = [1, 2, 3]
console.log(x, y) 