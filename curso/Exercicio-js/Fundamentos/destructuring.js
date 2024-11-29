const pessoa = {
    nome: 'ana',
    idade: 15
}

console.log(pessoa.nome)

const { nome, idade } = pessoa

console.log(nome, idade)

const { nome: n, idade: i } = pessoa

console.log(n, i)

const { sobrenome, bemHumorada = true } = pessoa
console.log(sobrenome, bemHumorada)

console.log(pessoa)