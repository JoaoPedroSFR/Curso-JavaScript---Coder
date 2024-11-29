numeros = [1, 2, 3, 4, 5, 10, 20, 30, 40,50,60]
//console.log(numeros.length)
//console.log(numeros)

//console.log(4 % 2)
function somentePares(numeros) {
    let convertidos = []
    let contadorConvertido = 0
    for (let i = 0; i < numeros.length; i++) {
        if (i % 2 == 0 && numeros[i] % 2 == 0) {
            //console.log(numeros[i])
            convertidos[contadorConvertido] = numeros[i]
            contadorConvertido = contadorConvertido + 1
        }
    } console.log(convertidos)

}
somentePares(numeros)