const pessoa = {
    nome: 'rebeca',
    idade: 1,
    peso: 13
}

console.log(Object.keys(pessoa))//mostra os atributos criados
console.log(Object.values(pessoa))//mostra o valor dos atributos
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(e => {
    console.log(e[0] + e[1])
})

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,// ser listada
    writable: false,//ser alterada
    value: '0101010'//atribuir o valor
})

pessoa.dataNascimento = '0102020'
console.log(pessoa.dataNascimento)

console.log(Object.keys(pessoa))

//object.assing()

const dest = { a: 1 }
const o1 = { b: 3 }
const o2 = { c: 3, a: 4 }
const obj = Object.assign(dest, o1, o2)//concatenar atribustos de objeto

console.log(dest)

Object.freeze(obj)//bloqueia alteração do objeto/ atributo
obj.c = 1234
console.log(obj)