const imprimirResultado = function (nota) {
    switch (Math.floor(nota)) {
        case 10: console.log('quadro de honra')
            break
        case 9:
            console.log('quadro de honra')
            break
        case 8: case 7:
            console.log('aprovado')
            break
        case 6: case 5: case 4:
            console.log('reprovado')
            break
        default:
            console.log('nota invalida')
    }
}

imprimirResultado(10)
imprimirResultado(8.5)
imprimirResultado(6.5)
imprimirResultado(2)
