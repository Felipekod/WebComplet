// ES8: Object.valiues/Object.entries
const obj = {a: 1, b:2, c:3}
console.log(Object.values(obj))
console.log(Object.entries(obj))

console.log(`------------------------`)
//Class
class Animal{}
class Cachorro extends Animal{
    falar(){
        return 'au au!'
    }
}

console.log(new Cachorro().falar())


console.log(`------------------------`)
