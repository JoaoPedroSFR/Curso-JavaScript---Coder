despesasTotais = [
    { nome: "Jornal online", categoria: "Informação", preco: 89.99 },
    { nome: "Cinema", categoria: "Entretenimento", preco: 150 }
]

function somaDespesas(despesas) {
    const somatorio = despesas.map(despesas => despesas.preco).reduce(function (acumulador, atual) {
        return acumulador + atual
    })
    console.log(somatorio)
}

somaDespesas(despesasTotais)