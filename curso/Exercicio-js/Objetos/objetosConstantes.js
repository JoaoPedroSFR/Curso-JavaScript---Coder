const pessoa = {
    nome: 'Joao',
}

pessoa.nome = 'pedro'

console.log(pessoa)

//pessoa = { nome:'ana'}
console.log(pessoa)

Object.freeze(pessoa)

pessoa.nome = 'joao'
console.log(pessoa)