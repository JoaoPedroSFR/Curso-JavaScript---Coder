//retorna um obj
const prod1={
    nome:'....',
    preco:45
}
console.log(prod1.nome)

function criarPessoa(){
    return{
        nome:'nana',
        sobrenome:'silva'
    }
}

console.log(criarPessoa())

function criarProduto(nome,preco){
    return{
        nome:nome,
        preco:preco
    }
}

console.log(criarProduto('joao',15))
console.log(criarProduto('teste',26))