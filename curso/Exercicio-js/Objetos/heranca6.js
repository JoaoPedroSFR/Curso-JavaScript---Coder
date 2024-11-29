function aula(nome, video) {
    this.nome = nome
    this.video = video
}

const aula1 = new aula('bemvindo', 123)
const aula2 = new aula('ate breve', 456)

console.log(aula1, aula2)

//simular o new

function novo(f, ...params) {
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj, params)
        return obj
}

const aula3 = novo(aula,'bemvindo',123)
console.log(aula3)