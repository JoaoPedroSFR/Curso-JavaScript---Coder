Array.prototype.forEach2 = function (callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i],i,callback)
    }
}

const aprovados = ['ana', 'joao', 'daniel', 'marco','joaona']


aprovados.forEach2(function (nome, indice) {
    console.log(indice + 1 + " " + nome)
})

