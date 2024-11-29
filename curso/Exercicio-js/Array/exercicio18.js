numeros = [1,2,3,4,5]

function media(numeros) {
    const resultado = numeros.reduce(function (acumulador, atual) {
        return acumulador + atual
    })
    let tamVetor=numeros.length
    //console.log(tamVetor)
    console.log(resultado/tamVetor)
}

media(numeros)
