const produto = new Object

produto.nome = 'cadeira'
produto['marca do produto'] = 'generico'

produto.preco = 220

console.log(produto)
delete produto.preco
delete produto['marca do produto']
console.log(produto)

const carro = {
    modelo: 'a4',
    valor: 89000,
    proprietario: {
        nome: 'raul',
        idade: 15,
        endereco: {
            logradouro: 'rua abc',
        },
    },
    condutores: [{
        nome: 'junior',
        idade: 19
    }, {
        nome: 'teste'
    }],

}

carro.proprietario.endereco.numero = 1000

console.log(carro.proprietario.endereco.numero)
console.log(carro)

delete carro.proprietario.endereco
console.log(carro)
console.log(carro.condutores[1])