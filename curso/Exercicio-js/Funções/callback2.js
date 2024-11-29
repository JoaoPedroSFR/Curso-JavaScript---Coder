const notas = [7, 5, 4, 8, 9, 10]

let notasBaixas = []
for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixas.push(notas[i])
    }
}

console.log(notasBaixas)

//com callback

notasBaixas = notas.filter(function (nota) {
    return nota <= 7
})

console.log(notasBaixas)

const notasBaixas2 = notas.filter(nota=>nota<7)
console.log(notasBaixas2)