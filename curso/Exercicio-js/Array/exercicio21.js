function sorteador(numero) {
    let sorteado = Math.floor(Math.random() * 10) + 1
    if (numero != sorteado) {
        return 'O numero sorteado foi ' + sorteado
    } else {
        return 'Parabens voce foi sorteado ' + sorteado + ' Voce ganhou'
    }
}

console.log(sorteador(10))