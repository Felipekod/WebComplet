

//criar funcao de forma literal
function fun1(){
    console.log("funcao 1");
}

//Armazenar uma funcao em uma variavel
const fun2 = function () {

}

//Armazenar funcao dentro de uma array
const array = [function(a, b) {return a + b}, fun1, fun2]
console.log(array[0](2, 3))

//armazendando funcao em um atributo de objeto
const obj = {}
obj.falar = function(a){ console.log(a)}

obj.falar("Falando")

//passar funcao como param
function run(fun){
    fun()
}

run(function() { console.log('executando')})