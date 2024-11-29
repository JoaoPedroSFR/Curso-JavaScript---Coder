function contagem(numeros) {
    let qtdImpares = 0
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] > 9 && numeros[i] < 21) {
            qtdImpares = qtdImpares + 1
        }
    } console.log(qtdImpares)

}

vetor = [11, 22, 13, 14, 15, 26, 7, 28, 29, 10, 17, 2, 3]
contagem(vetor)