numeros = [10, 2, 14, 7, 25,17]



function teste(numeros) {
    let maior = 0
    let segundo = 0
    numeros.forEach(element => {
        if (maior < element) {
            maior = element
        }
    })
    console.log(maior)

    numeros.forEach(element => {
        if (element < maior && segundo < element) {
            segundo = element
        }
        console.log(segundo)
    })

}
teste(numeros)