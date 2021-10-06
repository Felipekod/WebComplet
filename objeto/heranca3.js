



const pai = {nome: 'Pedro', corCabelo:'preto'}

const filha = Object.create(pai)
console.log(filha.corCabelo)

const filha2 = Object.create(pai, {
    nome: {value: 'Bia', writable: false, enumerable: true}
})

console.log(filha2, filha2.corCabelo)