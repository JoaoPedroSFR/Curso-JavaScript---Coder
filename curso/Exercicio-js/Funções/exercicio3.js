function expoente(base, expoente) {
    for (let i = 2; i <= expoente; i++) {
        if (i == 2) {
            var result = base * base
        } else {
            result = result * base
            
        }
    }console.log(result)
}
expoente(2, 3)

//maneira correta
function expoente2 (base, expoente) {

    resultado = base ** expoente

    return resultado
}

console.log(expoente2(2, 3))