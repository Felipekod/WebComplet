// nao aceita repeticao/ nao indexada

const times = new Set()
times.add('Vasco')
times.add('Sao paulo').add('Palmeiras').add('Corintians')
times.add('Sao paulo')

console.log(times) 
times.delete('Vasco')
