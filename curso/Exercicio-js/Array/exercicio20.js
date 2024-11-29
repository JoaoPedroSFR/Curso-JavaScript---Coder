numeros = [1, 10, 0, -10, 5, 24, 3, 100]

function menorNumero(numeros) {

    //console.log(numeros.length)

    if (numeros.length === 0) {
        return null
    }

    return Math.min(...numeros)
    //console.log(teste)
}

console.log(menorNumero(numeros))