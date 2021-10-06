console.log(this === global)  //this aponta p module.exports
console.log(this === module)
console.log(this === module.exports)
console.log(this === exports)





function logThis() {
    console.log('Dentro de uma funcao...')
    console.log(this === exports)   // DENTRO DE UMA FUNCAO THIS NAO APONTA P EXPORTS
    console.log(this === global)   // this dentro de uma funcao aponta p global
}


logThis()