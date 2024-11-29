//object .preventExtensions = nao conseguimos adicionar atributos novos no obj
// pode se excluir

const produto = Object.preventExtensions({
    nome: 'qualuer', preco: 2.99, tag: 'promocao'
})

console.log('extensivel:', Object.isExtensible(produto))
produto.nome = 'borracha'
produto.descricao = 'escolar'
delete produto.tag
console.log(produto)

//object .seal so consegue alterar

const pessoa = { nome: 'juliana', idade: 35 }
Object.seal(pessoa)
console.log('selado', Object.isSealed(pessoa))

pessoa.sobrenome = 'silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)

//object.freeze nao consegue fazer nada
