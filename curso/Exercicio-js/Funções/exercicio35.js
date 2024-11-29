pilha = [1, 2, 3, 4, 5, 6]
adiciona = [7, 8, 9]

function adicionar(a, b) {
    let tamanho = a.length + b.length
    var j = 0
    for (let i = a.length; i < tamanho; i++) {
        a[i] = b[j]
        j++
    } return a
}
console.log(adicionar(pilha, adiciona))
