//Operador ..rest(justar)/spread(espalhar)


//usar spread com objeto
const funcionario = { nome: 'Maria', salario: 2300}
const clone = {ativo: true, ...funcionario}
console.log(clone)


console.log(`------------`)
//usar spread com array
const grupoA = ['joao', 'pedro', 'gloria']
const grupoFinal = ['Maria', ...grupoA, 'rafaela']
console.log(grupoFinal)

