//percorre o array
const aprovados = ['ana', 'joao', 'daniel', 'marco']


aprovados.forEach(function (nome, indice) {
   console.log(indice + 1 + " " + nome)
})

aprovados.forEach(function (nome) {
   return nome
})

aprovados.forEach(nome => console.log(nome))

const exibirAprovados = function aprovador(aprovados) {
    console.log(aprovados)
}


const exibirAprovados2 = aprovados => console.log(aprovados)
aprovados.forEach(exibirAprovados2)

aprovados.forEach(exibirAprovados)

