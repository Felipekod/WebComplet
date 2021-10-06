







const aliunos = [
    {nome: 'Joao', nota: 7.5, bolsista: false},
    {nome: 'Maria', nota: 5.5, bolsista: true},
    {nome: 'Fel', nota: 7, bolsista: false},
    {nome: 'bobo', nota: 9.5, bolsista: true}
]



const resultado = alunos.map( a => a.nota ).reduce(function(acumulador, atual){
    console.log(acumulador, atual)
    return acumulador + atual
})