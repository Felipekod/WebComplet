




//Closure 'e o escopo criado quando uma funcao 'e declarada
// esse escopo permite a funcao a acessar e manipular variaveirs externas a funcao


const x = 'global'

function fora() {
    const x = 'local'
    function dentro(){
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())