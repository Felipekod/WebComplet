





//getters et setters
const sequencia = {

    _valor: 1, //convenção, underline para atributo privado
    get valor() {return this._valor++},
    set valor(valor) {
        if(valor > this._valor) this._valor = valor }

}