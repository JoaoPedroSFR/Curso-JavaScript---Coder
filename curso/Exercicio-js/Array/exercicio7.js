function inclusivo(numero, minimo, maximo, inclusivo = false) {
    if (inclusivo == false) {
        return 'true'
    }
    if (numero < minimo || numero > maximo) {
        return 'false'
    } else {
        return 'true'
    }
}
console.log(inclusivo(5, 2, 4, true))

function estaEntre(minimo, maximo, numero, inclusivo = false) {
    if(inclusivo) return numero >= minimo && numero <= maximo
    return numero > minimo && numero < maximo
    }
console.log(estaEntre(1,5,3))