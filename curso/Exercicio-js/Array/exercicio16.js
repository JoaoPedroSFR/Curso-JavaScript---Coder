numeros = [10, 11, 12, 13]
//console.log(numeros[0])

function soma(numeros) {

}

function somaArray(numeros) {
    const resultado = numeros.reduce(function (acumulador, atual) {
        console.log(acumulador,atual)
        
        return acumulador + atual
    },0)
    console.log(resultado)
}

somaArray(numeros)

